import { prisma } from '../config/prisma.js';
import { idSchema, listarLibrosSchema } from '../schemas/libro.schema.js';

export async function listarLibros(req, res, next) {
  try {
    const { pagina, limite, buscar } = listarLibrosSchema.parse(req.query);

    const where = {
      publicado: true,
      ...(buscar && {
        OR: [
          { titulo: { contains: buscar, mode: 'insensitive' } },
          { autor:  { contains: buscar, mode: 'insensitive' } },
        ],
      }),
    };

    const [libros, total] = await Promise.all([
      prisma.libro.findMany({
        where,
        select: {
          id: true, titulo: true, autor: true, descripcion: true, portadaUrl: true,
          _count: { select: { paginas: true } },
        },
        orderBy: { titulo: 'asc' },
        skip: (pagina - 1) * limite,
        take: limite,
      }),
      prisma.libro.count({ where }),
    ]);

    const salida = libros.map(({ _count, ...l }) => ({ ...l, totalPaginas: _count.paginas }));

    res.json({ libros: salida, total, pagina, totalPaginas: Math.ceil(total / limite) });
  } catch (err) {
    if (err.name === 'ZodError') return res.status(400).json({ error: 'Parámetros inválidos' });
    next(err);
  }
}

export async function obtenerLibro(req, res, next) {
  try {
    const id = idSchema.parse(req.params.id);

    const libro = await prisma.libro.findFirst({
      where: { id, publicado: true },
      select: {
        id: true, titulo: true, autor: true, descripcion: true, portadaUrl: true,
        _count: { select: { paginas: true } },
      },
    });

    if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });

    res.json({ libro: { ...libro, totalPaginas: libro._count.paginas, _count: undefined } });
  } catch (err) {
    if (err.name === 'ZodError') return res.status(400).json({ error: 'Identificador inválido' });
    next(err);
  }
}

export async function obtenerPaginas(req, res, next) {
  try {
    const id = idSchema.parse(req.params.id);

    const libro = await prisma.libro.findFirst({ where: { id, publicado: true }, select: { id: true } });
    if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });

    const paginas = await prisma.pagina.findMany({
      where: { libroId: id },
      select: { numero: true, contenido: true },
      orderBy: { numero: 'asc' },
    });

    res.json({ paginas });
  } catch (err) {
    if (err.name === 'ZodError') return res.status(400).json({ error: 'Identificador inválido' });
    next(err);
  }
}