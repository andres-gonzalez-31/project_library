import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import Encabezado from '../componentes/Encabezado';
import Portada from '../componentes/Portada';

export default function MisLecturas() {
  const [lecturas, setLecturas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [filtro, setFiltro] = useState('TODAS');

  useEffect(() => { cargar(); }, []);

  function cargar() {
    setCargando(true);
    api
      .misLecturas()
      .then((d) => { setLecturas(d.lecturas); setError(''); })
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }

  const enCurso = lecturas.filter((l) => l.estado !== 'TERMINADO');
  const leidos = lecturas.filter((l) => l.estado === 'TERMINADO');
  const visibles =
    filtro === 'EN_CURSO' ? enCurso : filtro === 'TERMINADAS' ? leidos : lecturas;

  const ultima = enCurso[0];

  return (
    <div className="min-h-screen">
      <Encabezado />

      <main className="mx-auto max-w-5xl px-4 py-7">
        <div className="mb-6">
          <h1 className="text-lg font-semibold tracking-tight text-texto">Mis lecturas</h1>
          <p className="mt-0.5 text-sm text-texto-sec">
            {cargando
              ? 'Cargando…'
              : `${enCurso.length} en curso · ${leidos.length} ${leidos.length === 1 ? 'terminado' : 'terminados'}`}
          </p>
        </div>

        {error && (
          <p className="rounded-lg border border-alerta/30 bg-alerta/10 px-3 py-2 text-sm text-alerta">
            {error}
          </p>
        )}

        {cargando && <Esqueleto />}

        {!cargando && !error && lecturas.length === 0 && (
          <div className="rounded-xl border border-dashed border-borde px-6 py-16 text-center">
            <p className="text-sm text-texto">Todavía no has empezado ningún libro.</p>
            <p className="mt-1 text-sm text-texto-sec">
              Abre uno del estante y tu progreso aparecerá aquí.
            </p>
            <Link
              to="/"
              className="mt-4 inline-block rounded-lg bg-ambar px-4 py-2 text-sm
                         font-semibold text-sobre-ambar transition-colors hover:bg-ambar-alto"
            >
              Ir al estante
            </Link>
          </div>
        )}

        {!cargando && lecturas.length > 0 && (
          <>
            {ultima && <Continuar lectura={ultima} />}

            <div className="mb-4 mt-8 flex flex-wrap items-center gap-2">
              {[
                ['TODAS', `Todas (${lecturas.length})`],
                ['EN_CURSO', `En curso (${enCurso.length})`],
                ['TERMINADAS', `Terminados (${leidos.length})`],
              ].map(([clave, texto]) => (
                <button
                  key={clave}
                  onClick={() => setFiltro(clave)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    filtro === clave
                      ? 'bg-elevado text-texto'
                      : 'text-texto-sec hover:text-texto'
                  }`}
                >
                  {texto}
                </button>
              ))}
            </div>

            {visibles.length === 0 ? (
              <p className="rounded-xl border border-dashed border-borde px-6 py-12 text-center text-sm text-texto-sec">
                Nada en esta categoría todavía.
              </p>
            ) : (
              <ul className="flex flex-col gap-3">
                {visibles.map((l) => (
                  <FilaLectura key={l.libro.id} lectura={l} alGuardar={cargar} />
                ))}
              </ul>
            )}
          </>
        )}
      </main>
    </div>
  );
}

/* ---------- continuar leyendo ---------- */
function Continuar({ lectura }) {
  const { libro } = lectura;
  const pct = porcentajeDe(lectura);

  return (
    <section className="rounded-xl border border-borde bg-panel p-5">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ambar">
        Continuar leyendo
      </p>

      <div className="flex gap-5">
        <div className="w-20 shrink-0 sm:w-24">
          <Portada titulo={libro.titulo} autor={libro.autor} portadaUrl={libro.portadaUrl} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h2 className="truncate text-base font-semibold text-texto">{libro.titulo}</h2>
          <p className="mt-0.5 text-sm text-texto-sec">{libro.autor}</p>

          <div className="mt-3 flex items-center gap-3">
            <div className="h-1.5 max-w-xs flex-1 overflow-hidden rounded-full bg-borde">
              <div className="h-full rounded-full bg-ambar" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-xs tabular-nums text-texto-sec">
              {lectura.paginaActual} / {libro.totalPaginas}
            </span>
          </div>

          <Link
            to={`/leer/${libro.id}`}
            className="mt-4 self-start rounded-lg bg-ambar px-4 py-2 text-sm
                       font-semibold text-sobre-ambar transition-colors hover:bg-ambar-alto"
          >
            Retomar en la página {lectura.paginaActual}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- una fila de la lista ---------- */
function FilaLectura({ lectura, alGuardar }) {
  const { libro } = lectura;
  const [abierta, setAbierta] = useState(false);
  const [resumen, setResumen] = useState(lectura.resumen ?? '');
  const [observaciones, setObservaciones] = useState(lectura.observaciones ?? '');
  const [guardando, setGuardando] = useState(false);
  const [aviso, setAviso] = useState('');

  const terminado = lectura.estado === 'TERMINADO';
  const pct = porcentajeDe(lectura);
  const hayNotas = Boolean(lectura.resumen || lectura.observaciones);

  async function guardar() {
    setGuardando(true);
    setAviso('');
    try {
      await api.guardarProgreso(libro.id, {
        paginaActual: lectura.paginaActual,
        estado: lectura.estado,
        resumen,
        observaciones,
      });
      setAviso('Guardado');
      alGuardar?.();
      setTimeout(() => setAviso(''), 2500);
    } catch (e) {
      setAviso(e.message);
    } finally {
      setGuardando(false);
    }
  }

  return (
    <li className="overflow-hidden rounded-xl border border-borde bg-panel">
      <div className="flex gap-4 p-4">
        <Link to={`/leer/${libro.id}`} className="grupo-libro w-14 shrink-0 sm:w-16">
          <Portada titulo={libro.titulo} autor={libro.autor} portadaUrl={libro.portadaUrl} />
        </Link>

        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <div className="flex items-start gap-2">
            <Link
              to={`/leer/${libro.id}`}
              className="min-w-0 flex-1 truncate text-sm font-medium text-texto hover:text-ambar"
            >
              {libro.titulo}
            </Link>
            {terminado && (
              <span className="shrink-0 rounded-full bg-exito/15 px-2 py-0.5 text-[0.65rem] font-semibold text-exito">
                Leído
              </span>
            )}
          </div>

          <p className="mt-0.5 truncate text-xs text-texto-sec">{libro.autor}</p>

          <div className="mt-2.5 flex items-center gap-3">
            <div className="h-1 max-w-[220px] flex-1 overflow-hidden rounded-full bg-borde">
              <div
                className={`h-full rounded-full ${terminado ? 'bg-exito' : 'bg-ambar'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="shrink-0 text-[0.7rem] tabular-nums text-texto-ter">
              pág. {lectura.paginaActual} de {libro.totalPaginas}
            </span>
          </div>
        </div>

        <button
          onClick={() => setAbierta((v) => !v)}
          aria-expanded={abierta}
          className="shrink-0 self-center rounded-lg border border-borde px-3 py-1.5 text-xs
                     text-texto-sec transition-colors hover:border-borde-vivo hover:text-texto"
        >
          {abierta ? 'Cerrar' : hayNotas ? 'Ver notas' : 'Añadir notas'}
        </button>
      </div>

      {abierta && (
        <div className="border-t border-borde bg-elevado/40 p-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <CampoNota
              etiqueta="Resumen de lo leído"
              valor={resumen}
              onChange={setResumen}
              placeholder="Qué pasó hasta aquí."
            />
            <CampoNota
              etiqueta="Observaciones"
              valor={observaciones}
              onChange={setObservaciones}
              placeholder="Tu opinión sobre el libro."
            />
          </div>

          <div className="mt-3 flex items-center justify-end gap-3">
            {aviso && (
              <span className={`text-xs ${aviso === 'Guardado' ? 'text-exito' : 'text-alerta'}`}>
                {aviso}
              </span>
            )}
            <button
              onClick={guardar}
              disabled={guardando}
              className="rounded-lg bg-ambar px-4 py-1.5 text-xs font-semibold text-sobre-ambar
                         transition-colors hover:bg-ambar-alto disabled:opacity-50"
            >
              {guardando ? 'Guardando…' : 'Guardar notas'}
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

function CampoNota({ etiqueta, valor, onChange, placeholder }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-texto-sec">{etiqueta}</label>
      <textarea
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        maxLength={2000}
        rows={4}
        placeholder={placeholder}
        className="w-full resize-y rounded-lg border border-borde bg-fondo px-3 py-2
                   text-sm leading-relaxed text-texto placeholder:text-texto-ter
                   outline-none transition-colors focus:border-ambar"
      />
    </div>
  );
}

function Esqueleto() {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex animate-pulse gap-4 rounded-xl border border-borde bg-panel p-4">
          <div className="aspect-[2/3] w-14 rounded bg-elevado" />
          <div className="flex-1 space-y-2 py-2">
            <div className="h-3 w-2/5 rounded bg-elevado" />
            <div className="h-2.5 w-1/4 rounded bg-elevado" />
            <div className="h-1 w-1/2 rounded bg-elevado" />
          </div>
        </div>
      ))}
    </div>
  );
}

function porcentajeDe(l) {
  if (l.estado === 'TERMINADO') return 100;
  const total = Math.max(l.libro.totalPaginas || 1, 1);
  return Math.round((l.paginaActual / total) * 100);
}
