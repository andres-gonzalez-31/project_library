import argon2 from 'argon2';
import { prisma } from '../config/prisma.js';
import { registroSchema, loginSchema } from '../schemas/auth.schema.js';
import { firmarToken, enviarCookie, limpiarCookie } from '../utils/jwt.js';
import { registrarAuditoria } from '../middlewares/auditoria.js';

const MAX_INTENTOS = 5;
const BLOQUEO_MIN = 15;

const OPCIONES_ARGON = {
  type: argon2.argon2id,
  memoryCost: 65536,
  timeCost: 3,
  parallelism: 4,
};

export async function registrar(req, res, next) {
  try {
    const datos = registroSchema.parse(req.body);

    const existe = await prisma.usuario.findUnique({ where: { email: datos.email } });
    if (existe) {
      await registrarAuditoria({ req, accion: 'REGISTRO', exito: false, detalle: 'email duplicado' });
      return res.status(409).json({ error: 'No se pudo completar el registro' });
    }

    const passwordHash = await argon2.hash(datos.password, OPCIONES_ARGON);

    const usuario = await prisma.usuario.create({
      data: { nombre: datos.nombre, email: datos.email, passwordHash },
      select: { id: true, nombre: true, email: true, rol: true },
    });

    await registrarAuditoria({ req, usuarioId: usuario.id, accion: 'REGISTRO', exito: true });

    res.status(201).json({ usuario });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ error: 'Datos inválidos', detalles: err.issues.map(i => i.message) });
    }
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const datos = loginSchema.parse(req.body);
    const usuario = await prisma.usuario.findUnique({ where: { email: datos.email } });

    if (!usuario) {
      await registrarAuditoria({ req, accion: 'LOGIN', exito: false, detalle: 'email inexistente' });
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    if (usuario.bloqueadoHasta && usuario.bloqueadoHasta > new Date()) {
      await registrarAuditoria({ req, usuarioId: usuario.id, accion: 'LOGIN', exito: false, detalle: 'cuenta bloqueada' });
      return res.status(423).json({ error: 'Cuenta bloqueada temporalmente. Intenta más tarde' });
    }

    const valida = await argon2.verify(usuario.passwordHash, datos.password);

    if (!valida) {
      const intentos = usuario.intentosFallidos + 1;
      const bloquear = intentos >= MAX_INTENTOS;

      await prisma.usuario.update({
        where: { id: usuario.id },
        data: {
          intentosFallidos: bloquear ? 0 : intentos,
          bloqueadoHasta: bloquear ? new Date(Date.now() + BLOQUEO_MIN * 60000) : null,
        },
      });

      await registrarAuditoria({ req, usuarioId: usuario.id, accion: 'LOGIN', exito: false, detalle: `intento ${intentos}` });
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    await prisma.usuario.update({
      where: { id: usuario.id },
      data: { intentosFallidos: 0, bloqueadoHasta: null, ultimoAcceso: new Date() },
    });

    enviarCookie(res, firmarToken(usuario));
    await registrarAuditoria({ req, usuarioId: usuario.id, accion: 'LOGIN', exito: true });

    res.json({ usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol } });
  } catch (err) {
    if (err.name === 'ZodError') return res.status(400).json({ error: 'Datos inválidos' });
    next(err);
  }
}

export async function logout(req, res) {
  limpiarCookie(res);
  await registrarAuditoria({ req, usuarioId: req.usuario?.id ?? null, accion: 'LOGOUT', exito: true });
  res.json({ ok: true });
}

export async function yo(req, res) {
  const usuario = await prisma.usuario.findUnique({
    where: { id: req.usuario.id },
    select: { id: true, nombre: true, email: true, rol: true },
  });
  res.json({ usuario });
}