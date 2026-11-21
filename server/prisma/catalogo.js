/**
 * Descarga el catalogo completo de Project Gutenberg y lo guarda en local.
 *
 *   npm run catalogo
 *
 * Son ~80.000 obras (unos 15 MB). Se baja una vez y la busqueda deja de
 * depender de que un servicio externo este en pie. Project Gutenberg
 * regenera el archivo una vez por semana; volver a correr esto lo refresca.
 */
import 'dotenv/config';
import { prisma } from '../src/config/prisma.js';

const URL_CSV = 'https://www.gutenberg.org/cache/epub/feeds/pg_catalog.csv';
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const LOTE = 1000;

/** Parser CSV segun RFC 4180: respeta comillas, comas dentro de campos y "" escapadas. */
export function parsearCSV(texto) {
  const filas = [];
  let fila = [];
  let campo = '';
  let entreComillas = false;

  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];

    if (entreComillas) {
      if (c === '"') {
        if (texto[i + 1] === '"') { campo += '"'; i++; }
        else entreComillas = false;
      } else campo += c;
      continue;
    }

    if (c === '"') { entreComillas = true; continue; }
    if (c === ',') { fila.push(campo); campo = ''; continue; }
    if (c === '\r') continue;
    if (c === '\n') { fila.push(campo); filas.push(fila); fila = []; campo = ''; continue; }
    campo += c;
  }

  if (campo !== '' || fila.length) { fila.push(campo); filas.push(fila); }
  return filas;
}

/** Convierte las filas crudas en registros, buscando las columnas por nombre. */
export function filasARegistros(filas) {
  if (!filas.length) return [];

  const cabecera = filas[0].map((h) => h.trim().toLowerCase());
  const col = (...nombres) => {
    for (const n of nombres) {
      const i = cabecera.indexOf(n);
      if (i !== -1) return i;
    }
    return -1;
  };

  const iId = col('text#', 'id');
  const iTipo = col('type');
  const iTitulo = col('title');
  const iIdioma = col('language');
  const iAutor = col('authors', 'author');
  const iMaterias = col('subjects');

  if (iId === -1 || iTitulo === -1) {
    throw new Error('El CSV no trae las columnas esperadas (Text#, Title)');
  }

  const vistos = new Set();
  const registros = [];

  for (let f = 1; f < filas.length; f++) {
    const r = filas[f];
    if (!r || r.length < 2) continue;

    // solo libros de texto; el catalogo tambien trae audio e imagenes
    if (iTipo !== -1 && r[iTipo] && r[iTipo].trim() !== 'Text') continue;

    const id = Number.parseInt(r[iId], 10);
    if (!Number.isInteger(id) || id < 1 || vistos.has(id)) continue;

    const titulo = (r[iTitulo] ?? '').replace(/\s+/g, ' ').trim();
    if (!titulo) continue;

    vistos.add(id);
    registros.push({
      gutenbergId: id,
      titulo: titulo.slice(0, 300),
      autor: ((r[iAutor] ?? '').replace(/\s+/g, ' ').trim() || 'Anónimo').slice(0, 200),
      idioma: ((r[iIdioma] ?? '').trim() || 'und').slice(0, 20),
      materias: ((r[iMaterias] ?? '').replace(/\s+/g, ' ').trim() || null)?.slice(0, 500) ?? null,
    });
  }

  return registros;
}

async function main() {
  console.log('Descargando el catálogo de Project Gutenberg…');

  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 120000);

  let csv;
  try {
    const res = await fetch(URL_CSV, { signal: ctrl.signal, headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error(`Project Gutenberg respondió ${res.status}`);
    csv = await res.text();
  } finally {
    clearTimeout(t);
  }

  console.log(`  ${(csv.length / 1048576).toFixed(1)} MB descargados`);

  const registros = filasARegistros(parsearCSV(csv));
  if (!registros.length) throw new Error('El catálogo llegó vacío');

  console.log(`  ${registros.length.toLocaleString('es')} obras de texto`);
  console.log('Guardando en la base…');

  for (let i = 0; i < registros.length; i += LOTE) {
    const lote = registros.slice(i, i + LOTE);

    // INSERT multifila parametrizado: nada de concatenar valores en el SQL
    const valores = [];
    const marcas = lote.map((r, n) => {
      const b = n * 5;
      valores.push(r.gutenbergId, r.titulo, r.autor, r.idioma, r.materias);
      return `($${b + 1}, $${b + 2}, $${b + 3}, $${b + 4}, $${b + 5}, now())`;
    });

    await prisma.$executeRawUnsafe(
      `INSERT INTO "CatalogoFuente"
         ("gutenbergId", titulo, autor, idioma, materias, actualizado)
       VALUES ${marcas.join(',')}
       ON CONFLICT ("gutenbergId") DO UPDATE SET
         titulo = EXCLUDED.titulo,
         autor = EXCLUDED.autor,
         idioma = EXCLUDED.idioma,
         materias = EXCLUDED.materias,
         actualizado = now()`,
      ...valores
    );

    const hecho = Math.min(i + LOTE, registros.length);
    process.stdout.write(`\r  ${hecho.toLocaleString('es')} / ${registros.length.toLocaleString('es')}`);
  }

  const total = await prisma.catalogoFuente?.count?.().catch(() => null);
  console.log(`\n✅ Catálogo listo${total ? ` (${total.toLocaleString('es')} en la base)` : ''}`);
}

// solo corre si se invoca directamente, no al importarlo en una prueba
if (process.argv[1] && process.argv[1].endsWith('catalogo.js')) {
  main()
    .catch((e) => { console.error('❌', e.message); process.exit(1); })
    .finally(() => prisma.$disconnect());
}
