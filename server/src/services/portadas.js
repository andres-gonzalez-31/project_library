/**
 * Resolucion de portadas.
 *
 * Se ejecuta UNA VEZ al importar un libro, nunca al pintar la grilla:
 * Open Library limita a 100 consultas por IP cada 5 minutos y nos
 * bloquearia con pocos usuarios navegando.
 *
 * Cascada:
 *   1. Gutenberg  (el libro viene de ahi, suele tener portada)
 *   2. Open Library por titulo + autor
 *   3. null -> el frontend dibuja el respaldo tipografico
 */

import { HOSTS_PERMITIDOS, UA, rutasDePortada } from './espejos.js';

// Una portada real pesa bastante mas que esto. Por debajo es un
// marcador de posicion o una imagen rota.
const BYTES_MINIMOS = 2500;

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

/**
 * Comprueba que la URL devuelva de verdad una imagen.
 * Devuelve la URL si sirve, null si no. Nunca lanza.
 */
export async function verificarImagen(url, msTope = 8000) {
  let u;
  try {
    u = validarUrl(url);
  } catch {
    return null;
  }

  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), msTope);

  try {
    const res = await fetch(u, {
      method: 'HEAD',
      redirect: 'follow',
      signal: ctrl.signal,
      headers: { 'User-Agent': UA },
    });

    if (!res.ok) return null;

    const tipo = res.headers.get('content-type') ?? '';
    if (!tipo.startsWith('image/')) return null;

    // Open Library devuelve un 1x1 transparente cuando no hay portada
    // y no se le paso default=false. El tamaño lo delata.
    const largo = Number(res.headers.get('content-length') ?? 0);
    if (largo > 0 && largo < BYTES_MINIMOS) return null;

    return u.toString();
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

export function portadaGutenberg(gutenbergId) {
  return rutasDePortada(gutenbergId)[0];
}

/**
 * Busca la portada en Open Library por titulo y autor.
 * El parametro default=false es clave: sin el, Open Library responde
 * 200 con una imagen en blanco en vez de 404, y acabariamos guardando
 * cuadros vacios en toda la grilla.
 */
async function portadaOpenLibrary(titulo, autor) {
  const params = new URLSearchParams({
    title: titulo.slice(0, 120),
    limit: '1',
    fields: 'cover_i',
  });
  if (autor && autor !== 'Anónimo') params.set('author', autor.slice(0, 80));

  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 8000);

  try {
    const res = await fetch(`https://openlibrary.org/search.json?${params}`, {
      redirect: 'follow',
      signal: ctrl.signal,
      headers: { 'User-Agent': UA, Accept: 'application/json' },
    });
    if (!res.ok) return null;

    const data = await res.json();
    const coverId = data?.docs?.[0]?.cover_i;
    if (!coverId) return null;

    return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg?default=false`;
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

/**
 * Cascada completa. Devuelve una URL verificada o null.
 * Nunca lanza: una portada que falla no debe tumbar la importacion.
 */
export async function resolverPortada({ gutenbergId, titulo, autor }) {
  if (gutenbergId) {
    for (const ruta of rutasDePortada(gutenbergId)) {
      const dePG = await verificarImagen(ruta);
      if (dePG) return { url: dePG, fuente: 'gutenberg' };
    }
  }

  if (titulo) {
    const candidata = await portadaOpenLibrary(titulo, autor);
    if (candidata) {
      const deOL = await verificarImagen(candidata);
      if (deOL) return { url: deOL, fuente: 'openlibrary' };
    }
  }

  return { url: null, fuente: 'respaldo' };
}

export { validarUrl as _validarUrl, BYTES_MINIMOS };
