import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import { api } from '../api';
import Hoja, { Portada, Contraportada } from '../componentes/Hoja';

export default function Lector() {
  const { id } = useParams();
  const navegar = useNavigate();
  const libroRef = useRef(null);

  const [libro, setLibro] = useState(null);
  const [paginas, setPaginas] = useState([]);
  const [progreso, setProgreso] = useState(null);
  const [actual, setActual] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [guardando, setGuardando] = useState(false);
  const [terminado, setTerminado] = useState(false);

  useEffect(() => {
    Promise.all([api.libro(id), api.paginas(id), api.progreso(id)])
      .then(([a, b, c]) => {
        setLibro(a.libro);
        setPaginas(b.paginas);
        setProgreso(c.progreso);
        setActual(c.progreso.paginaActual);
      })
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, [id]);

  // salta a la página guardada cuando el libro ya se montó
  useEffect(() => {
    if (cargando || !progreso) return;
    const destino = progreso.paginaActual;
    const t = setTimeout(() => {
      libroRef.current?.pageFlip?.()?.turnToPage(destino);
    }, 600);
    return () => clearTimeout(t);
  }, [cargando, progreso]);

  async function pararDeLeer() {
    setGuardando(true);
    try {
      await api.guardarProgreso(id, {
        paginaActual: Math.max(1, Math.min(actual, paginas.length)),
        estado: terminado || actual >= paginas.length ? 'TERMINADO' : 'LEYENDO',
      });
      navegar('/mis-lecturas');
    } catch (e) {
      setError(e.message);
      setGuardando(false);
    }
  }

  if (cargando) return <Pantalla texto="Abriendo el libro..." />;
  if (error) return <Pantalla texto={error} />;
  if (!libro) return <Pantalla texto="Libro no encontrado" />;

  const hojas = [
    <Portada key="portada" titulo={libro.titulo} autor={libro.autor} />,
    ...paginas.map((p) => (
      <Hoja key={p.numero} numero={p.numero} contenido={p.contenido} total={paginas.length} />
    )),
  ];

  if ((hojas.length + 1) % 2 !== 0) {
    hojas.push(<Hoja key="relleno" numero={0} contenido="" total={paginas.length} />);
  }

  hojas.push(<Contraportada key="fin" />);

  const porcentaje = terminado
    ? 100
    : Math.round((actual / Math.max(paginas.length, 1)) * 100);

  function alVoltear(e) {
    const indice = e.data;
    const llegoAlFinal = indice > paginas.length;
    setTerminado(llegoAlFinal);
    setActual(Math.max(1, Math.min(indice, paginas.length)));
  }


  return (
    <div className="min-h-screen flex flex-col items-center py-4 px-2">
      <div className="w-full max-w-md mb-4 px-2">
        <div className="flex items-center justify-between mb-2 gap-3">
          <h1 className="text-texto text-sm sm:text-base truncate"
              style={{ fontFamily: 'var(--font-lectura)' }}>
            {libro.titulo}
          </h1>
          <span className="text-texto-sec text-xs whitespace-nowrap">
            {terminado ? '✓ Terminado' : `${porcentaje}%`}
          </span>
        </div>

        <div className="h-1.5 rounded-full bg-borde overflow-hidden">
          <div
            className="h-full rounded-full bg-ambar transition-all duration-500"
            style={{ width: `${porcentaje}%` }}
          />
        </div>

        <p className="text-texto-ter text-xs mt-1.5">
          Página {actual} de {paginas.length}
        </p>
      </div>

      <div className="libro-sombra">
        <HTMLFlipBook
          ref={libroRef}
          width={340}
          height={480}
          size="stretch"
          minWidth={280}
          maxWidth={420}
          minHeight={400}
          maxHeight={580}
          maxShadowOpacity={0.55}
          showCover={true}
          mobileScrollSupport={true}
          flippingTime={900}
          usePortrait={false}
          drawShadow={true}
          startZIndex={10}
          autoSize={true}
          onFlip={alVoltear}
          className="libro"
        >
          {hojas}
        </HTMLFlipBook>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={() => libroRef.current?.pageFlip()?.flipPrev()}
          className="px-4 py-2 rounded bg-elevado text-texto-sec text-sm hover:bg-borde-vivo transition"
        >
          ‹ Anterior
        </button>

        <button
          onClick={pararDeLeer}
          disabled={guardando}
          className="px-5 py-2 rounded bg-ambar text-sobre-ambar text-sm font-medium
                     hover:bg-ambar-alto disabled:opacity-50 transition"
        >
          {guardando ? 'Guardando...' : 'Parar de leer'}
        </button>

        <button
          onClick={() => libroRef.current?.pageFlip()?.flipNext()}
          className="px-4 py-2 rounded bg-elevado text-texto-sec text-sm hover:bg-borde-vivo transition"
        >
          Siguiente ›
        </button>
      </div>

      <p className="text-texto-ter text-xs mt-3 text-center">
        Arrastra la esquina de la hoja para pasar la página
      </p>
    </div>
  );
}

function Pantalla({ texto }) {
  return (
    <div className="min-h-screen flex items-center justify-center text-texto-sec px-4 text-center">
      {texto}
    </div>
  );
}