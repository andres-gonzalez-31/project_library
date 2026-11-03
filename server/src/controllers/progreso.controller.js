import { prisma } from '../config/prisma.js';
import { idSchema, progresoSchema } from '../schemas/libro.schema.js';
import { registrarAuditoria } from '../middlewares/auditoria.js';

export async function misLecturas(req, res, next) {
  try {
    const lecturas = await prisma.progreso.findMany({
      where: { usuarioId: req.usuario.id },
      select: {
        paginaActual: true, estado: true, resumen: true, observaciones: true, actualizadoEn: true,
        libro: { select: { id: true, titulo: true, autor: true, portadaUrl: true } },
      },
      orderBy: { actualizadoEn: 'desc' },
    });

    res.json({ lecturas });
  } catch (err) { next(err); }
}

export async function obtenerProgreso(req, res, next) {
  try {
    const libroId = idSchema.parse(req.params.libroId);

    const progreso = await prisma.progreso.findUnique({
      where: { usuarioId_libroId: { usuarioId: req.usuario.id, libroId } },
      select: { paginaActual: true, estado: true, resumen: true, observaciones: true },
    });

    res.json({ progreso: progreso ?? { paginaActual: 1, estado: 'LEYENDO', resumen: null, observaciones: null } });
  } catch (err) {
    if (err.name === 'ZodError') return res.status(400).json({ error: 'Identificador inválido' });
    next(err);
  }
}

export async function guardarProgreso(req, res, next) {
  try {
    const libroId = idSchema.parse(req.params.libroId);
    const datos = progresoSchema.parse(req.body);

    const libro = await prisma.libro.findFirst({
      where: { id: libroId, publicado: true },
      select: { id: true, _count: { select: { paginas: true } } },
    });

    if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });

    if (datos.paginaActual > libro._count.paginas) {
      return res.status(400).json({ error: 'Página fuera de rango' });
    }

    const progreso = await prisma.progreso.upsert({
      where: { usuarioId_libroId: { usuarioId: req.usuario.id, libroId } },
      create: { usuarioId: req.usuario.id, libroId, ...datos },
      update: datos,
      select: { paginaActual: true, estado: true, resumen: true, observaciones: true },
    });

    res.json({ progreso });
  } catch (err) {
    if (err.name === 'ZodError') return res.status(400).json({ error: 'Datos inválidos' });
    next(err);
  }
}

export async function eliminarProgreso(req, res, next) {
  try {
    const libroId = idSchema.parse(req.params.libroId);

    await prisma.progreso.deleteMany({
      where: { usuarioId: req.usuario.id, libroId },
    });

    await registrarAuditoria({ req, usuarioId: req.usuario.id, accion: 'ELIMINAR_PROGRESO', exito: true, detalle: libroId });
    res.json({ ok: true });
  } catch (err) {
    if (err.name === 'ZodError') return res.status(400).json({ error: 'Identificador inválido' });
    next(err);
  }
}