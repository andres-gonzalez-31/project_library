const BASE = 'https://gutendex.com';
const HOSTS_PERMITIDOS = new Set(['gutendex.com', 'www.gutenberg.org', 'gutenberg.org']);

function validarUrl(url) {
  let u;
  try {
    u = new URL(url);
  } catch {
    throw new Error('Origen no permitido');
  }

  if (u.protocol !== 'https:') throw new Error('Origen no permitido');
  if (!HOSTS_PERMITIDOS.has(u.hostname)) throw new Error('Origen no permitido');

  return u;
}

async function traer(url, tipo = 'json', intento = 1) {
  const u = validarUrl(url);
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 25000);

  try {
    const res = await fetch(u, {
      signal: ctrl.signal,
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
        'Accept': tipo === 'json' ? 'application/json, text/plain, */*' : 'text/plain, */*',
        'Accept-Language': 'es,en;q=0.9',
      },
    });

    if ((res.status === 503 || res.status === 429) && intento < 3) {
      clearTimeout(t);
      await new Promise((r) => setTimeout(r, 1200 * intento));
      return traer(url, tipo, intento + 1);
    }

    if (!res.ok) throw new Error(`Fuente respondió ${res.status}`);
    return tipo === 'json' ? res.json() : res.text();
  } finally {
    clearTimeout(t);
  }
}

export async function buscarEnFuente(consulta, pagina = 1) {
  const url = `${BASE}/books?search=${encodeURIComponent(consulta)}&page=${pagina}`;
  const data = await traer(url);
  return {
    total: data.count,
    resultados: data.results.map((l) => ({
      gutenbergId: l.id,
      titulo: l.title,
      autor: l.authors?.[0]?.name ?? 'Anónimo',
      idiomas: l.languages,
      descargas: l.download_count,
      portadaUrl: `https://www.gutenberg.org/cache/epub/${l.id}/pg${l.id}.cover.medium.jpg`,
      textoUrl: l.formats?.['text/plain; charset=us-ascii'] ?? l.formats?.['text/plain'] ?? null,
    })).filter((l) => l.textoUrl),
  };
}

export async function obtenerDeFuente(gutenbergId) {
  const data = await traer(`${BASE}/books/${gutenbergId}`);

  const clave = Object.keys(data.formats ?? {}).find(
    (k) => k.startsWith('text/plain') && !data.formats[k].endsWith('.zip')
  );
  const textoUrl = clave ? data.formats[clave] : null;

  if (!textoUrl) throw new Error('Ese libro no tiene versión en texto plano');

  const crudo = await traer(textoUrl, 'texto');

  return {
    gutenbergId: data.id,
    titulo: data.title.slice(0, 200),
    autor: (data.authors?.[0]?.name ?? 'Anónimo').slice(0, 120),
    descripcion: (data.summaries?.[0] ?? `Obra de dominio público de ${data.authors?.[0]?.name ?? 'autor desconocido'}`).slice(0, 600),
    portadaUrl: `https://www.gutenberg.org/cache/epub/${data.id}/pg${data.id}.cover.medium.jpg`,
    paginas: partirEnPaginas(limpiarTexto(crudo)),
  };
}

function limpiarTexto(txt) {
  const inicio = txt.search(/\*\*\*\s*START OF (THE|THIS) PROJECT GUTENBERG/i);
  const fin = txt.search(/\*\*\*\s*END OF (THE|THIS) PROJECT GUTENBERG/i);

  let cuerpo = txt;
  if (inicio !== -1) cuerpo = cuerpo.slice(txt.indexOf('\n', inicio) + 1);
  if (fin !== -1) cuerpo = cuerpo.slice(0, cuerpo.search(/\*\*\*\s*END OF (THE|THIS) PROJECT GUTENBERG/i));

  return cuerpo.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

function partirEnPaginas(texto, max = 1100) {
  const parrafos = texto.split(/\n\n+/);
  const paginas = [];
  let actual = '';

  for (const p of parrafos) {
    const limpio = p.replace(/\n/g, ' ').trim();
    if (!limpio) continue;

    if ((actual + limpio).length > max && actual) {
      paginas.push(actual.trim());
      actual = '';
    }
    actual += limpio + '\n\n';
  }

  if (actual.trim()) paginas.push(actual.trim());
  return paginas.slice(0, 400);
}