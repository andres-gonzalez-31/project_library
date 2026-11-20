import { Link } from 'react-router-dom';
import Portada from './Portada';

export default function TarjetaLibro({ libro, progreso }) {
  const porcentaje = progreso?.porcentaje ?? 0;
  const terminado = progreso?.estado === 'TERMINADO';

  return (
    <Link
      to={`/leer/${libro.id}`}
      className="grupo-libro block rounded-lg p-2 -m-2 transition-colors hover:bg-elevado/50"
    >
      <div className="relative">
        <Portada titulo={libro.titulo} autor={libro.autor} portadaUrl={libro.portadaUrl} />

        {terminado && (
          <span className="absolute top-2 right-2 rounded-full bg-exito/90 px-2 py-0.5
                           text-[0.65rem] font-semibold text-fondo shadow">
            Leído
          </span>
        )}
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-medium leading-snug text-texto line-clamp-2">
          {libro.titulo}
        </h3>
        <p className="mt-0.5 text-xs text-texto-sec">{libro.autor}</p>

        {porcentaje > 0 && !terminado && (
          <div className="mt-2 flex items-center gap-2">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-borde">
              <div className="h-full rounded-full bg-ambar" style={{ width: `${porcentaje}%` }} />
            </div>
            <span className="text-[0.65rem] tabular-nums text-texto-ter">{porcentaje}%</span>
          </div>
        )}
      </div>
    </Link>
  );
}
