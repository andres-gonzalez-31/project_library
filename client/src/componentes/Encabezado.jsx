import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth';

const ENLACES = [
  { a: '/', texto: 'Estante' },
  { a: '/explorar', texto: 'Explorar' },
  { a: '/mis-lecturas', texto: 'Mis lecturas' },
];

export default function Encabezado() {
  const { usuario, salir } = useAuth();
  const navegar = useNavigate();
  const { pathname } = useLocation();

  async function cerrar() {
    await salir();
    navegar('/login');
  }

  return (
    <header className="sticky top-0 z-20 border-b border-borde bg-fondo/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-texto">
          <span className="grid h-7 w-7 place-items-center rounded bg-ambar text-sm font-bold text-sobre-ambar">
            B
          </span>
          <span className="text-base font-semibold tracking-tight">Biblioteca</span>
        </Link>

        <nav className="ml-auto flex items-center gap-1 text-sm">
          {ENLACES.map((e) => {
            const activo = pathname === e.a;
            return (
              <Link
                key={e.a}
                to={e.a}
                className={`rounded-md px-2.5 py-1.5 transition-colors ${
                  activo ? 'bg-elevado text-texto' : 'text-texto-sec hover:text-texto'
                }`}
              >
                {e.texto}
              </Link>
            );
          })}

          <span className="mx-1 hidden h-4 w-px bg-borde sm:block" />

          <span className="hidden text-xs text-texto-ter sm:inline">{usuario?.nombre}</span>
          <button
            onClick={cerrar}
            className="rounded-md px-2.5 py-1.5 text-texto-sec transition-colors hover:text-alerta"
          >
            Salir
          </button>
        </nav>
      </div>
    </header>
  );
}
