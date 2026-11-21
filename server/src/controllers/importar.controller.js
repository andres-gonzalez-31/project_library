import { z } from 'zod';
import { prisma } from '../config/prisma.js';
import { buscarEnFuente, obtenerDeFuente } from '../services/gutendex.js';
import { resolverPortada } from '../services/portadas.js';
import { registrarAuditoria } from '../middlewares/auditoria.js';

const buscarSchema = z.object({
  q: z.string().trim().min(2).max(80),
  pagina: z.coerce.number().int().min(1).max(20).default(1),
});

const importarSchema = z.object({
  gutenbergId: z.coerce.number().int().min(1).max(999999),
});

export async function buscarExterno(req, res, next) {
  try {
    const { q, pagina } = buscarSchema.parse(req.query);
    const data = await buscarEnFuente(q, pagina);

    const ids = data.resultados.map((r) => r.gutenbergId);
    const yaTengo = await prisma.libro.findMany({
      where: { gutenbergId: { in: ids } },
      select: { gutenbergId: true },
    });
    const set = new Set(yaTengo.map((l) => l.gutenbergId));

    res.json({
      total: data.total,
      resultados: data.resultados.map((r) => ({ ...r, importado: set.has(r.gutenbergId) })),
    });
  } catch (err) {
    if (err.name === 'ZodError') return res.status(400).json({ error: 'Búsqueda inválida' });
    if (err.message === 'Origen no permitido') return res.status(400).json({ error: 'Origen no permitido' });
    console.error('[gutendex]', err.name, err.message);
    res.status(502).json({ error: 'La fuente externa no respondió' });
  }
}

export async function importarLibro(req, res, next) {
  try {
    const { gutenbergId } = importarSchema.parse(req.body);

    const existe = await prisma.libro.findUnique({ where: { gutenbergId } });
    if (existe) return res.status(409).json({ error: 'Ese libro ya está en la biblioteca' });

    const datos = await obtenerDeFuente(gutenbergId);
    if (!datos.paginas.length) return res.status(422).json({ error: 'No se pudo extraer el contenido' });

    // La portada se resuelve y se VERIFICA aqui, una sola vez. Si no
    // existe queda en null y el frontend dibuja el respaldo tipografico;
    // asi nunca aparece un cuadro roto en el estante.
    const portada = await resolverPortada({
      gutenbergId: datos.gutenbergId,
      titulo: datos.titulo,
      autor: datos.autor,
    });

    const libro = await prisma.$transaction(async (tx) => {
      const nuevo = await tx.libro.create({
        data: {
          gutenbergId: datos.gutenbergId,
          titulo: datos.titulo,
          autor: datos.autor,
          descripcion: datos.descripcion,
          portadaUrl: portada.url,
        },
      });

      await tx.pagina.createMany({
        data: datos.paginas.map((contenido, i) => ({ libroId: nuevo.id, numero: i + 1, contenido })),
      });

      return nuevo;
    });

    await registrarAuditoria({
      req, usuarioId: req.usuario.id, accion: 'IMPORTAR_LIBRO', exito: true,
      detalle: `${datos.titulo} (${datos.paginas.length} págs, portada: ${portada.fuente})`,
    });

    res.status(201).json({ libro, paginas: datos.paginas.length, portada: portada.fuente });
  } catch (err) {
    if (err.name === 'ZodError') return res.status(400).json({ error: 'Identificador inválido' });
    await registrarAuditoria({ req, usuarioId: req.usuario?.id, accion: 'IMPORTAR_LIBRO', exito: false, detalle: err.message });
    res.status(502).json({ error: 'No se pudo importar el libro' });
  }
}