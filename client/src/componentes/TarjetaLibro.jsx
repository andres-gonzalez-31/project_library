import { Link } from 'react-router-dom';

export default function TarjetaLibro({ libro }) {
  return (
    <Link
      to={`/leer/${libro.id}`}
      className="group block rounded-lg overflow-hidden bg-cuero-oscuro/40
                 border border-cuero/40 hover:border-cuero transition
                 hover:-translate-y-1 hover:shadow-xl duration-200"
    >
      <div className="aspect-[2/3] relative overflow-hidden bg-cuero">
        {libro.portadaUrl ? (
          <img src={libro.portadaUrl} alt={libro.titulo}
               className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-4
                          bg-gradient-to-br from-cuero to-cuero-oscuro">
            <span className="text-papel/90 text-center text-sm leading-snug"
                  style={{ fontFamily: 'var(--font-lectura)' }}>
              {libro.titulo}
            </span>
          </div>
        )}
        <div className="absolute inset-y-0 left-0 w-2 bg-black/30" />
      </div>

      <div className="p-3">
        <h3 className="text-papel font-medium leading-tight line-clamp-2">{libro.titulo}</h3>
        <p className="text-papel/60 text-xs mt-1">{libro.autor}</p>
        <p className="text-papel/50 text-xs mt-2 line-clamp-3">{libro.descripcion}</p>
      </div>
    </Link>
  );
}