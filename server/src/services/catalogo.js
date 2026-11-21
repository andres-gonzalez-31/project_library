import { prisma } from '../config/prisma.js';

/**
 * Busqueda contra la copia local del catalogo de Project Gutenberg.
 *
 * No sale a internet: la busqueda es instantanea, no tiene limite de
 * peticiones y no se cae si el servicio externo esta caido. El catalogo
 * se puebla con `npm run catalogo`.
 */

const POR_PAGINA = 24;

export async function hayCatalogo() {
  const [{ n }] = await prisma.$queryRaw`SELECT COUNT(*)::int AS n FROM "CatalogoFuente"`;
  return n > 0;
}

export async function buscarEnCatalogo(consulta, pagina = 1) {
  const patron = `%${consulta}%`;
  const exacto = `${consulta}%`;
  const salto = (pagina - 1) * POR_PAGINA;

  // Las consultas van parametrizadas por Prisma ($queryRaw con plantilla
  // etiquetada), asi que el texto del usuario nunca se concatena al SQL.
  const filas = await prisma.$queryRaw`
    SELECT "gutenbergId", titulo, autor, idioma
    FROM "CatalogoFuente"
    WHERE titulo ILIKE ${patron} OR autor ILIKE ${patron}
    ORDER BY
      CASE
        WHEN titulo ILIKE ${exacto} THEN 0
        WHEN autor  ILIKE ${exacto} THEN 1
        WHEN titulo ILIKE ${patron} THEN 2
        ELSE 3
      END,
      CASE idioma WHEN 'es' THEN 0 WHEN 'en' THEN 1 ELSE 2 END,
      length(titulo),
      titulo
    LIMIT ${POR_PAGINA} OFFSET ${salto}
  `;

  const [{ n }] = await prisma.$queryRaw`
    SELECT COUNT(*)::int AS n
    FROM "CatalogoFuente"
    WHERE titulo ILIKE ${patron} OR autor ILIKE ${patron}
  `;

  return {
    total: n,
    resultados: filas.map((f) => ({
      gutenbergId: f.gutenbergId,
      titulo: f.titulo,
      autor: f.autor,
      idiomas: [f.idioma],
      portadaUrl: `https://www.gutenberg.org/cache/epub/${f.gutenbergId}/pg${f.gutenbergId}.cover.medium.jpg`,
    })),
  };
}

export async function existeEnCatalogo(gutenbergId) {
  const filas = await prisma.$queryRaw`
    SELECT "gutenbergId", titulo, autor, idioma
    FROM "CatalogoFuente"
    WHERE "gutenbergId" = ${gutenbergId}
    LIMIT 1
  `;
  return filas[0] ?? null;
}
