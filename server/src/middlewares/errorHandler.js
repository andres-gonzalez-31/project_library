export function notFound(req, res) {
  res.status(404).json({ error: 'Recurso no encontrado' });
}

export function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  console.error(`[error ${status}]`, err.message);

  res.status(status).json({
    error: status === 500 ? 'Error interno del servidor' : err.message,
  });
}