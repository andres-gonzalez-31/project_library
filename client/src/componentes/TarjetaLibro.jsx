import { Link } from 'react-router-dom';

export default function TarjetaLibro({ libro }) {
  return (
    <Link to={`/leer/${libro.id}`} className="grupo-libro block">
      <div className="libro-3d">
        <div className="libro-3d-cuerpo">
          <div className="libro-3d-lomo" />
          <div className="libro-3d-portada">
            {libro.portadaUrl ? (
              <img src={libro.portadaUrl} alt={libro.titulo}
                   className="w-full h-full object-cover" loading="lazy" />
            ) : (
              <div className="libro-3d-interior">
                <h3 className="libro-3d-titulo">{libro.titulo}</h3>
                <div className="libro-3d-linea" />
                <p className="libro-3d-autor">{libro.autor}</p>
              </div>
            )}
          </div>
          <div className="libro-3d-hojas" />
        </div>
      </div>

      <div className="mt-3 px-1">
        <h4 className="text-papel text-sm font-medium leading-tight line-clamp-2">
          {libro.titulo}
        </h4>
        <p className="text-papel/55 text-xs mt-0.5">{libro.autor}</p>
        <p className="text-papel/40 text-xs mt-1.5 line-clamp-2">{libro.descripcion}</p>
      </div>
    </Link>
  );
}