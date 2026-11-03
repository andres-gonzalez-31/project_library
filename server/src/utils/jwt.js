import jwt from 'jsonwebtoken';

const COOKIE = 'token';

export function firmarToken(usuario) {
  return jwt.sign(
    { sub: usuario.id, rol: usuario.rol },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );
}

export function enviarCookie(res, token) {
  res.cookie(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 2 * 60 * 60 * 1000,
  });
}

export function limpiarCookie(res) {
  res.clearCookie(COOKIE);
}

export const NOMBRE_COOKIE = COOKIE;