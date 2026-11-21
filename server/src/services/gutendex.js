/**
 * Descarga el texto de un libro desde Project Gutenberg.
 *
 * Va DIRECTO a gutenberg.org, sin intermediarios: Gutendex se cayo con
 * 503 tres veces durante el desarrollo y la app no puede depender de el.
 * Gutenberg guarda los .txt en tres rutas distintas segun la epoca del
 * libro, asi que se prueban en orden.
 */

const HOSTS_PERMITIDOS = new Set(['www.gutenberg.org', 'gutenberg.org']);

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

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

async function traerTexto(url, intento = 1) {
  const u = validarUrl(url);
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 30000);

  try {
    const res = await fetch(u, {
      signal: ctrl.signal,
      redirect: 'follow',
      headers: { 'User-Agent': UA, Accept: 'text/plain, */*' },
    });

    if ((res.status === 503 || res.status === 429) && intento < 3) {
      clearTimeout(t);
      await new Promise((r) => setTimeout(r, 1500 * intento));
      return traerTexto(url, intento + 1);
    }

    if (!res.ok) throw new Error(`Gutenberg respondió ${res.status}`);
    return res.text();
  } finally {
    clearTimeout(t);
  }
}

function rutasDe(id) {
  return [
    `https://www.gutenberg.org/cache/epub/${id}/pg${id}.txt`,
    `https://www.gutenberg.org/files/${id}/${id}-0.txt`,
    `https://www.gutenberg.org/files/${id}/${id}.txt`,
    `https://www.gutenberg.org/ebooks/${id}.txt.utf-8`,
  ];
}

export async function obtenerDeFuente(gutenbergId, metadatos = {}) {
  let crudo = null;
  let ultimo = '';

  for (const ruta of rutasDe(gutenbergId)) {
    try {
      const txt = await traerTexto(ruta);
      if (txt && txt.length > 1000) { crudo = txt; break; }
    } catch (e) {
      ultimo = e.message;
    }
  }

  if (!crudo) {
    throw new Error(ultimo || 'Ese libro no tiene versión en texto plano');
  }

  const cabecera = leerCabecera(crudo, gutenbergId);
  const titulo = (metadatos.titulo || cabecera.titulo).slice(0, 200);
  const autor = (metadatos.autor || cabecera.autor).slice(0, 120);

  return {
    gutenbergId,
    titulo,
    autor,
    descripcion: `Obra de dominio público de ${autor}, publicada por Project Gutenberg.`.slice(0, 600),
    paginas: partirEnPaginas(limpiarTexto(crudo)),
  };
}

/** Lee Title y Author de la cabecera que Gutenberg pone al principio. */
function leerCabecera(txt, id) {
  const cabecera = txt.slice(0, 2500);
  const t = cabecera.match(/^Title:\s*(.+)$/im);
  const a = cabecera.match(/^Author:\s*(.+)$/im);
  return {
    titulo: t?.[1]?.trim() || `Libro ${id}`,
    autor: a?.[1]?.trim() || 'Anónimo',
  };
}

/** Quita la licencia de Gutenberg del principio y del final. */
function limpiarTexto(txt) {
  const reInicio = /\*\*\*\s*START OF (THE|THIS) PROJECT GUTENBERG/i;
  const reFin = /\*\*\*\s*END OF (THE|THIS) PROJECT GUTENBERG/i;

  let cuerpo = txt;
  const inicio = cuerpo.search(reInicio);
  if (inicio !== -1) {
    const salto = cuerpo.indexOf('\n', inicio);
    if (salto !== -1) cuerpo = cuerpo.slice(salto + 1);
  }
  const fin = cuerpo.search(reFin);
  if (fin !== -1) cuerpo = cuerpo.slice(0, fin);

  return cuerpo.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

/** Trocea el texto en paginas, cortando siempre entre parrafos. */
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

export { limpiarTexto as _limpiarTexto, partirEnPaginas as _partirEnPaginas };
