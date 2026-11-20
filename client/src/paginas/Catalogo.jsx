import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import Encabezado from '../componentes/Encabezado';
import TarjetaLibro from '../componentes/TarjetaLibro';

export default function Catalogo() {
  const [libros, setLibros] = useState([]);
  const [lecturas, setLecturas] = useState([]);
  const [buscar, setBuscar] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.misLecturas().then((d) => setLecturas(d.lecturas)).catch(() => {});
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setCargando(true);
      const q = buscar.trim() ? `?buscar=${encodeURIComponent(buscar.trim())}` : '';
      api
        .libros(q)
        .then((d) => { setLibros(d.libros); setError(''); })
        .catch((e) => setError(e.message))
        .finally(() => setCargando(false));
    }, 350);
    return () => clearTimeout(t);
  }, [buscar]);

  // progreso por libro, para pintar la barra en cada tomo
  const progresoPorLibro = useMemo(() => {
    const mapa = {};
    for (const l of lecturas) {
      mapa[l.libro.id] = { estado: l.estado, paginaActual: l.paginaActual };
    }
    for (const libro of libros) {
      const p = mapa[libro.id];
      if (!p) continue;
      p.porcentaje =
        p.estado === 'TERMINADO'
          ? 100
          : Math.round((p.paginaActual / Math.max(libro.totalPaginas || 1, 1)) * 100);
    }
    return mapa;
  }, [lecturas, libros]);

  return (
    <div className="min-h-screen">
      <Encabezado />

      <main className="mx-auto max-w-6xl px-4 py-7">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-texto">Mi estante</h1>
            <p className="mt-0.5 text-sm text-texto-sec">
              {cargando ? 'Cargando…' : `${libros.length} ${libros.length === 1 ? 'libro' : 'libros'}`}
            </p>
          </div>

          <input
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
            placeholder="Buscar por título o autor"
            aria-label="Buscar en el estante"
            className="w-full rounded-lg border border-borde bg-elevado px-3 py-2 text-sm
                       text-texto placeholder:text-texto-ter outline-none
                       transition-colors focus:border-ambar sm:w-64"
          />
        </div>

        {error && (
          <p className="rounded-lg border border-alerta/30 bg-alerta/10 px-3 py-2 text-sm text-alerta">
            {error}
          </p>
        )}

        {cargando && (
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[2/3] rounded bg-elevado" />
                <div className="mt-3 h-3 w-4/5 rounded bg-elevado" />
                <div className="mt-2 h-2.5 w-2/5 rounded bg-elevado" />
              </div>
            ))}
          </div>
        )}

        {!cargando && !error && libros.length === 0 && (
          <div className="rounded-xl border border-dashed border-borde px-6 py-14 text-center">
            <p className="text-sm text-texto">
              {buscar ? 'Ningún libro coincide con esa búsqueda.' : 'Tu estante está vacío.'}
            </p>
            <p className="mt-1 text-sm text-texto-sec">
              {buscar
                ? 'Prueba con otro título o autor.'
                : 'Busca clásicos de dominio público y añádelos a tu biblioteca.'}
            </p>
            <Link
              to="/explorar"
              className="mt-4 inline-block rounded-lg bg-ambar px-4 py-2 text-sm
                         font-semibold text-sobre-ambar transition-colors hover:bg-ambar-alto"
            >
              Explorar libros
            </Link>
          </div>
        )}

        {!cargando && libros.length > 0 && (
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-4">
            {libros.map((l) => (
              <TarjetaLibro key={l.id} libro={l} progreso={progresoPorLibro[l.id]} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
