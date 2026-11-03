import jwt from 'jsonwebtoken';
import { NOMBRE_COOKIE } from '../utils/jwt.js';

export function autenticar(req, res, next) {
  const token = req.cookies?.[NOMBRE_COOKIE];
  if (!token) return res.status(401).json({ error: 'No autenticado' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = { id: payload.sub, rol: payload.rol };
    next();
  } catch {
    res.status(401).json({ error: 'Sesión inválida o expirada' });
  }
}

export function soloAdmin(req, res, next) {
  if (req.usuario?.rol !== 'ADMIN') {
    return res.status(403).json({ error: 'Acceso denegado' });
  }
  next();
}