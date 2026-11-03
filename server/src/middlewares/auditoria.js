import { prisma } from '../config/prisma.js';

export async function registrarAuditoria({ req, usuarioId = null, accion, exito, detalle = null }) {
  try {
    await prisma.auditoria.create({
      data: {
        usuarioId,
        accion,
        exito,
        detalle,
        ip: req.ip ?? null,
        userAgent: req.get('user-agent')?.slice(0, 255) ?? null,
      },
    });
  } catch (e) {
    console.error('[auditoria] no se pudo registrar:', e.message);
  }
}