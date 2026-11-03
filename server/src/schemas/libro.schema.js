import { z } from 'zod';

export const idSchema = z.string().uuid('Identificador inválido');

export const listarLibrosSchema = z.object({
  pagina: z.coerce.number().int().min(1).default(1),
  limite: z.coerce.number().int().min(1).max(24).default(12),
  buscar: z.string().trim().max(80).optional(),
});

export const progresoSchema = z.object({
  paginaActual: z.coerce.number().int().min(1),
  estado: z.enum(['LEYENDO', 'TERMINADO']).optional(),
  resumen: z.string().trim().max(2000).optional(),
  observaciones: z.string().trim().max(2000).optional(),
});