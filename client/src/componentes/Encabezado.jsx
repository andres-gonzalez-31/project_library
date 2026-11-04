import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

export default function Encabezado() {
  const { usuario, salir } = useAuth();
  const navegar = useNavigate();

  async function cerrar() {
    await salir();
    navegar('/login');
  }

  return (
    <header className="border-b border-cuero/40 bg-cuero-oscuro/30 sticky top-0 z-10 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="text-xl sm:text-2xl text-papel"
              style={{ fontFamily: 'var(--font-lectura)' }}>
          Biblioteca
        </Link>

        <nav className="flex items-center gap-3 sm:gap-5 text-sm">
          <Link to="/" className="text-papel/80 hover:text-papel">Catálogo</Link>
          <Link to="/mis-lecturas" className="text-papel/80 hover:text-papel">Mis lecturas</Link>
          <span className="hidden sm:inline text-papel/50">{usuario?.nombre}</span>
          <button onClick={cerrar} className="text-papel/70 hover:text-red-300">Salir</button>
        </nav>
      </div>
    </header>
  );
}