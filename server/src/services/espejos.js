/**
 * Espejos de Project Gutenberg.
 *
 * gutenberg.org bloquea el acceso automatizado y responde 503 a los
 * programas; su propia politica pide usar los espejos oficiales para
 * cualquier descarga que no sea un humano con navegador.
 *
 * Se prueban en orden hasta que uno responda.
 */

export const ESPEJOS = [
  'https://aleph.pglaf.org',       // el que usa gutenbergr por defecto
  'https://gutenberg.pglaf.org',   // espejo oficial de PGLAF
  'https://mirror.csclub.uwaterloo.ca/gutenberg', // Universidad de Waterloo
  'https://www.gutenberg.org',     // ultimo recurso: suele rechazar robots
];

export const HOSTS_PERMITIDOS = new Set([
  'aleph.pglaf.org',
  'gutenberg.pglaf.org',
  'mirror.csclub.uwaterloo.ca',
  'www.gutenberg.org',
  'gutenberg.org',
  'covers.openlibrary.org',
  'openlibrary.org',
]);

export const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

/**
 * Ruta en arbol que usan los espejos: el id se parte en digitos.
 * 1342 -> 1/3/4/1342     84 -> 8/84     5 -> 0/5
 */
export function rutaEnArbol(id) {
  const s = String(id);
  if (s.length === 1) return `0/${s}`;
  return `${s.slice(0, -1).split('').join('/')}/${s}`;
}

/** Todas las rutas conocidas donde puede estar el .txt de un libro. */
export function rutasDeTexto(id) {
  const arbol = rutaEnArbol(id);
  const rutas = [];

  for (const base of ESPEJOS) {
    rutas.push(
      `${base}/cache/epub/${id}/pg${id}.txt`,
      `${base}/${arbol}/${id}-0.txt`,
      `${base}/${arbol}/${id}.txt`
    );
  }

  return rutas;
}

/** Donde puede estar el catalogo CSV completo. */
export function rutasDeCatalogo() {
  return ESPEJOS.map((base) => `${base}/cache/epub/feeds/pg_catalog.csv`);
}

/** Donde puede estar la portada de un libro. */
export function rutasDePortada(id) {
  return ESPEJOS.map((base) => `${base}/cache/epub/${id}/pg${id}.cover.medium.jpg`);
}

export function validarUrl(url) {
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

/**
 * Prueba varias URLs en orden y devuelve la primera que responda bien.
 * Lanza solo si fallan todas, con el ultimo error para poder diagnosticar.
 */
export async function primeraQueResponda(urls, { tipo = 'texto', msTope = 30000, minimo = 1000 } = {}) {
  const errores = [];

  for (const url of urls) {
    let u;
    try {
      u = validarUrl(url);
    } catch {
      continue;
    }

    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), msTope);

    try {
      const res = await fetch(u, {
        signal: ctrl.signal,
        redirect: 'follow',
        headers: { 'User-Agent': UA, Accept: 'text/plain, */*' },
      });

      if (!res.ok) {
        errores.push(`${u.hostname} respondió ${res.status}`);
        continue;
      }

      const cuerpo = tipo === 'json' ? await res.json() : await res.text();
      if (tipo !== 'json' && cuerpo.length < minimo) {
        errores.push(`${u.hostname} devolvió muy poco contenido`);
        continue;
      }

      return { cuerpo, url: u.toString(), host: u.hostname };
    } catch (e) {
      errores.push(`${u.hostname}: ${e.name === 'AbortError' ? 'tardó demasiado' : e.message}`);
    } finally {
      clearTimeout(t);
    }
  }

  throw new Error(`Ningún espejo respondió. ${errores.slice(0, 4).join(' · ')}`);
}
