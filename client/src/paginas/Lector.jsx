import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import { api } from '../api';
import Hoja, { Portada, Contraportada } from '../componentes/Hoja';
import PanelNotas from '../componentes/PanelNotas';

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
  const [panelAbierto, setPanelAbierto] = useState(false);

  useEffect(() => {
    Promise.all([api.libro(id), api.paginas(id), api.progreso(id)])
      .then(([a, b, c]) => {
        setLibro(a.libro);
        setPaginas(b.paginas);
        setProgreso(c.progreso);
        setActual(c.progreso.paginaActual);
        setTerminado(c.progreso.estado === 'TERMINADO');
      })
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, [id]);

  // salta a la pagina guardada cuando el libro ya se monto
  useEffect(() => {
    if (cargando || !progreso) return;
    const destino = progreso.paginaActual;
    const t = setTimeout(() => {
      libroRef.current?.pageFlip?.()?.turnToPage(destino);
    }, 600);
    return () => clearTimeout(t);
  }, [cargando, progreso]);

  // flechas del teclado para pasar pagina
  useEffect(() => {
    function tecla(e) {
      if (panelAbierto) return;
      if (e.key === 'ArrowLeft') libroRef.current?.pageFlip?.()?.flipPrev();
      if (e.key === 'ArrowRight') libroRef.current?.pageFlip?.()?.flipNext();
    }
    window.addEventListener('keydown', tecla);
    return () => window.removeEventListener('keydown', tecla);
  }, [panelAbierto]);

  async function guardar({ resumen, observaciones }) {
    setGuardando(true);
    setError('');
    try {
      await api.guardarProgreso(id, {
        paginaActual: Math.max(1, Math.min(actual, paginas.length)),
        estado: terminado || actual >= paginas.length ? 'TERMINADO' : 'LEYENDO',
        resumen,
        observaciones,
      });
      navegar('/mis-lecturas');
    } catch (e) {
      setError(e.message);
      setGuardando(false);
    }
  }

  if (cargando) return <Pantalla texto="Abriendo el libro…" />;
  if (error && !libro) return <Pantalla texto={error} />;
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
    setTerminado(indice > paginas.length);
    setActual(Math.max(1, Math.min(indice, paginas.length)));
  }

  return (
    <div className="flex min-h-screen flex-col items-center px-3 py-4">
      {/* barra superior */}
      <div className="mb-5 w-full max-w-2xl">
        <div className="mb-2.5 flex items-center gap-3">
          <Link
            to="/"
            className="shrink-0 rounded-md px-2 py-1 text-sm text-texto-ter transition-colors hover:text-texto"
            aria-label="Volver al estante"
          >
            ‹
          </Link>
          <h1 className="min-w-0 flex-1 truncate text-sm font-medium text-texto">
            {libro.titulo}
          </h1>
          <span className="shrink-0 text-xs tabular-nums text-texto-sec">
            {terminado ? 'Leído' : `${porcentaje}%`}
          </span>
        </div>

        <div className="h-1 overflow-hidden rounded-full bg-borde">
          <div
            className={`h-full rounded-full transition-all duration-500 ${terminado ? 'bg-exito' : 'bg-ambar'}`}
            style={{ width: `${porcentaje}%` }}
          />
        </div>

        <p className="mt-1.5 text-xs tabular-nums text-texto-ter">
          Página {actual} de {paginas.length}
        </p>
      </div>

      {/* el libro */}
      <div className="libro-sombra">
        <HTMLFlipBook
          ref={libroRef}
          width={400}
          height={560}
          size="stretch"
          minWidth={280}
          maxWidth={520}
          minHeight={400}
          maxHeight={720}
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

      {/* controles */}
      <div className="mt-6 flex items-center gap-2">
        <button
          onClick={() => libroRef.current?.pageFlip()?.flipPrev()}
          aria-label="Página anterior"
          className="rounded-lg border border-borde px-3.5 py-2 text-sm text-texto-sec
                     transition-colors hover:border-borde-vivo hover:text-texto"
        >
          ‹
        </button>

        <button
          onClick={() => setPanelAbierto(true)}
          className="rounded-lg bg-ambar px-5 py-2 text-sm font-semibold text-sobre-ambar
                     transition-colors hover:bg-ambar-alto"
        >
          Parar de leer
        </button>

        <button
          onClick={() => libroRef.current?.pageFlip()?.flipNext()}
          aria-label="Página siguiente"
          className="rounded-lg border border-borde px-3.5 py-2 text-sm text-texto-sec
                     transition-colors hover:border-borde-vivo hover:text-texto"
        >
          ›
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-texto-ter">
        Arrastra la esquina de la hoja, o usa las flechas del teclado
      </p>

      {panelAbierto && (
        <PanelNotas
          titulo={libro.titulo}
          pagina={actual}
          total={paginas.length}
          terminado={terminado}
          inicial={progreso}
          guardando={guardando}
          error={error}
          onGuardar={guardar}
          onCancelar={() => setPanelAbierto(false)}
        />
      )}
    </div>
  );
}

function Pantalla({ texto }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-center text-sm text-texto-sec">
      {texto}
    </div>
  );
}
