const BASE = '/api';

async function pedir(ruta, opciones = {}) {
  const res = await fetch(`${BASE}${ruta}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    ...opciones,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || 'Error de conexión');
  }

  return data;
}

export const api = {
  registro: (datos) => pedir('/auth/registro', { method: 'POST', body: JSON.stringify(datos) }),
  login: (datos) => pedir('/auth/login', { method: 'POST', body: JSON.stringify(datos) }),
  logout: () => pedir('/auth/logout', { method: 'POST' }),
  yo: () => pedir('/auth/yo'),

  libros: (params = '') => pedir(`/libros${params}`),
  libro: (id) => pedir(`/libros/${id}`),
  paginas: (id) => pedir(`/libros/${id}/paginas`),

  misLecturas: () => pedir('/progreso/mis-lecturas'),
  progreso: (libroId) => pedir(`/progreso/${libroId}`),
  guardarProgreso: (libroId, datos) => pedir(`/progreso/${libroId}`, { method: 'PUT', body: JSON.stringify(datos) }),
  olvidarProgreso: (libroId) => pedir(`/progreso/${libroId}`, { method: 'DELETE' }),

  buscarFuente: (q, pagina = 1) =>
    pedir(`/fuente/buscar?q=${encodeURIComponent(q)}&pagina=${pagina}`),
  importarLibro: (gutenbergId) =>
    pedir('/fuente/importar', { method: 'POST', body: JSON.stringify({ gutenbergId }) }),
};