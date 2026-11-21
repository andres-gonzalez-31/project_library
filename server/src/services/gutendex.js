/**
 * Descarga el texto de un libro desde Project Gutenberg.
 *
 * gutenberg.org bloquea el acceso automatizado (responde 503), asi que
 * se usan sus espejos oficiales. Ver services/espejos.js.
 */
import { rutasDeTexto, primeraQueResponda } from './espejos.js';

export async function obtenerDeFuente(gutenbergId, metadatos = {}) {
  const { cuerpo: crudo, host } = await primeraQueResponda(rutasDeTexto(gutenbergId), {
    tipo: 'texto',
    minimo: 1000,
  });

  const cabecera = leerCabecera(crudo, gutenbergId);
  const titulo = (metadatos.titulo || cabecera.titulo).slice(0, 200);
  const autor = (metadatos.autor || cabecera.autor).slice(0, 120);

  return {
    gutenbergId,
    titulo,
    autor,
    descripcion: `Obra de dominio público de ${autor}, publicada por Project Gutenberg.`.slice(0, 600),
    paginas: partirEnPaginas(limpiarTexto(crudo)),
    espejo: host,
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
