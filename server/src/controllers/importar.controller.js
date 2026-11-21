import { z } from 'zod';
import { prisma } from '../config/prisma.js';
import { obtenerDeFuente } from '../services/gutendex.js';
import { buscarEnCatalogo, existeEnCatalogo, hayCatalogo } from '../services/catalogo.js';
import { resolverPortada } from '../services/portadas.js';
import { registrarAuditoria } from '../middlewares/auditoria.js';

const buscarSchema = z.object({
  q: z.string().trim().min(2).max(80),
  pagina: z.coerce.number().int().min(1).max(50).default(1),
});

const importarSchema = z.object({
  gutenbergId: z.coerce.number().int().min(1).max(999999),
});

export async function buscarExterno(req, res) {
  try {
    const { q, pagina } = buscarSchema.parse(req.query);

    if (!(await hayCatalogo())) {
      return res.status(503).json({
        error: 'El catálogo todavía no está descargado. Corre "npm run catalogo" en la carpeta server.',
        catalogoVacio: true,
      });
    }

    const data = await buscarEnCatalogo(q, pagina);

    const ids = data.resultados.map((r) => r.gutenbergId);
    const yaTengo = ids.length
      ? await prisma.libro.findMany({
          where: { gutenbergId: { in: ids } },
          select: { gutenbergId: true },
        })
      : [];
    const set = new Set(yaTengo.map((l) => l.gutenbergId));

    res.json({
      total: data.total,
      pagina,
      resultados: data.resultados.map((r) => ({ ...r, importado: set.has(r.gutenbergId) })),
    });
  } catch (err) {
    if (err.name === 'ZodError') return res.status(400).json({ error: 'Búsqueda inválida' });
    console.error('[catalogo]', err.name, err.message);
    res.status(500).json({ error: 'No se pudo completar la búsqueda' });
  }
}

export async function importarLibro(req, res) {
  let gutenbergId;
  try {
    ({ gutenbergId } = importarSchema.parse(req.body));
  } catch {
    return res.status(400).json({ error: 'Identificador inválido' });
  }

  try {
    const existe = await prisma.libro.findUnique({ where: { gutenbergId } });
    if (existe) return res.status(409).json({ error: 'Ese libro ya está en tu estante' });

    // metadatos del catalogo local: mejores que los de la cabecera del .txt
    const delCatalogo = await existeEnCatalogo(gutenbergId);

    const datos = await obtenerDeFuente(gutenbergId, {
      titulo: delCatalogo?.titulo,
      autor: delCatalogo?.autor,
    });

    if (!datos.paginas.length) {
      return res.status(422).json({ error: 'No se pudo extraer el contenido de ese libro' });
    }

    // La portada se resuelve y VERIFICA aqui, una sola vez. Si no existe
    // queda en null y el frontend dibuja el respaldo tipografico.
    const portada = await resolverPortada({
      gutenbergId,
      titulo: datos.titulo,
      autor: datos.autor,
    });

    const libro = await prisma.$transaction(async (tx) => {
      const nuevo = await tx.libro.create({
        data: {
          gutenbergId,
          titulo: datos.titulo,
          autor: datos.autor,
          descripcion: datos.descripcion,
          portadaUrl: portada.url,
        },
      });

      await tx.pagina.createMany({
        data: datos.paginas.map((contenido, i) => ({
          libroId: nuevo.id,
          numero: i + 1,
          contenido,
        })),
      });

      return nuevo;
    });

    await registrarAuditoria({
      req,
      usuarioId: req.usuario.id,
      accion: 'IMPORTAR_LIBRO',
      exito: true,
      detalle: `${datos.titulo} (${datos.paginas.length} págs, portada: ${portada.fuente})`,
    });

    res.status(201).json({ libro, paginas: datos.paginas.length, portada: portada.fuente });
  } catch (err) {
    console.error('[importar]', err.name, err.message);
    await registrarAuditoria({
      req,
      usuarioId: req.usuario?.id,
      accion: 'IMPORTAR_LIBRO',
      exito: false,
      detalle: `${gutenbergId}: ${err.message}`.slice(0, 300),
    });
    res.status(502).json({ error: 'No se pudo descargar ese libro de Project Gutenberg' });
  }
}
