import { useEffect, useState } from 'react';
import { api } from '../api';
import Encabezado from '../componentes/Encabezado';
import TarjetaLibro from '../componentes/TarjetaLibro';

export default function Catalogo() {
  const [libros, setLibros] = useState([]);
  const [buscar, setBuscar] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const t = setTimeout(() => {
      setCargando(true);
      const q = buscar.trim() ? `?buscar=${encodeURIComponent(buscar.trim())}` : '';
      api.libros(q)
        .then((d) => { setLibros(d.libros); setError(''); })
        .catch((e) => setError(e.message))
        .finally(() => setCargando(false));
    }, 350);

    return () => clearTimeout(t);
  }, [buscar]);

  return (
    <div className="min-h-screen">
      <Encabezado />

      <main className="max-w-6xl mx-auto px-4 py-6">
        <input
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          placeholder="Buscar por título o autor..."
          className="w-full sm:max-w-sm mb-6 px-3 py-2 rounded bg-papel/95 text-tinta
                     outline-none border-2 border-transparent focus:border-cuero"
        />

        {cargando && <p className="text-papel/60">Cargando libros...</p>}
        {error && <p className="text-red-300">{error}</p>}

        {!cargando && !error && libros.length === 0 && (
          <p className="text-papel/60">No se encontraron libros.</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {libros.map((l) => <TarjetaLibro key={l.id} libro={l} />)}
        </div>
      </main>
    </div>
  );
}