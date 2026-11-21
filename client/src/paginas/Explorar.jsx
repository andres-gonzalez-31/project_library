import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import Encabezado from '../componentes/Encabezado';
import Portada from '../componentes/Portada';

const SUGERENCIAS = ['Cervantes', 'Kafka', 'Poe', 'Verne', 'Dickens', 'Austen', 'Shelley'];
const AVISO_CATALOGO = 'catálogo todavía no está descargado';

const IDIOMAS = {
  es: 'Español', en: 'Inglés', fr: 'Francés', de: 'Alemán',
  it: 'Italiano', pt: 'Portugués', la: 'Latín',
};

export default function Explorar() {
  const [consulta, setConsulta] = useState('');
  const [enviada, setEnviada] = useState('');
  const [resultados, setResultados] = useState([]);
  const [total, setTotal] = useState(0);
  const [buscando, setBuscando] = useState(false);
  const [error, setError] = useState('');
  const [estado, setEstado] = useState({}); // gutenbergId -> 'importando' | 'listo' | mensaje de error

  useEffect(() => {
    if (!enviada) return;
    setBuscando(true);
    setError('');
    api
      .buscarFuente(enviada)
      .then((d) => { setResultados(d.resultados); setTotal(d.total); })
      .catch((e) => { setError(e.message); setResultados([]); })
      .finally(() => setBuscando(false));
  }, [enviada]);

  function buscar(e) {
    e?.preventDefault();
    const q = consulta.trim();
    if (q.length < 2) return;
    setEnviada(q);
  }

  function sugerir(palabra) {
    setConsulta(palabra);
    setEnviada(palabra);
  }

  async function importar(libro) {
    setEstado((s) => ({ ...s, [libro.gutenbergId]: 'importando' }));
    try {
      await api.importarLibro(libro.gutenbergId);
      setEstado((s) => ({ ...s, [libro.gutenbergId]: 'listo' }));
    } catch (e) {
      setEstado((s) => ({ ...s, [libro.gutenbergId]: e.message }));
    }
  }

  return (
    <div className="min-h-screen">
      <Encabezado />

      <main className="mx-auto max-w-6xl px-4 py-7">
        <div className="mb-6">
          <h1 className="text-lg font-semibold tracking-tight text-texto">Explorar</h1>
          <p className="mt-0.5 max-w-xl text-sm text-texto-sec">
            Más de 78.000 obras de dominio público de Project Gutenberg. Busca por
            título o autor y añádelas a tu estante.
          </p>
        </div>

        <form onSubmit={buscar} className="mb-4 flex gap-2">
          <input
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            placeholder="Quijote, Kafka, Frankenstein…"
            aria-label="Buscar en Project Gutenberg"
            className="min-w-0 flex-1 rounded-lg border border-borde bg-elevado px-3.5 py-2.5
                       text-sm text-texto placeholder:text-texto-ter outline-none
                       transition-colors focus:border-ambar sm:max-w-sm"
          />
          <button
            type="submit"
            disabled={consulta.trim().length < 2 || buscando}
            className="shrink-0 rounded-lg bg-ambar px-5 py-2.5 text-sm font-semibold
                       text-sobre-ambar transition-colors hover:bg-ambar-alto disabled:opacity-40"
          >
            {buscando ? 'Buscando…' : 'Buscar'}
          </button>
        </form>

        <div className="mb-7 flex flex-wrap items-center gap-2">
          <span className="text-xs text-texto-ter">Prueba con:</span>
          {SUGERENCIAS.map((s) => (
            <button
              key={s}
              onClick={() => sugerir(s)}
              className="rounded-full border border-borde px-2.5 py-1 text-xs text-texto-sec
                         transition-colors hover:border-ambar hover:text-ambar"
            >
              {s}
            </button>
          ))}
        </div>

        {error && error.includes(AVISO_CATALOGO) && (
          <div className="rounded-xl border border-ambar/30 bg-ambar/5 px-5 py-6">
            <h2 className="text-sm font-semibold text-texto">Falta descargar el catálogo</h2>
            <p className="mt-1.5 max-w-xl text-sm text-texto-sec">
              La búsqueda usa una copia local de las 78.000 obras de Project Gutenberg,
              para no depender de que su servidor esté en pie. Se baja una sola vez.
            </p>
            <p className="mt-3 text-xs text-texto-ter">En la terminal, dentro de la carpeta <code className="text-texto-sec">server</code>:</p>
            <pre className="mt-1.5 overflow-x-auto rounded-lg border border-borde bg-fondo px-3 py-2 text-sm text-ambar">
npm run catalogo
            </pre>
            <p className="mt-3 text-xs text-texto-ter">
              Tarda un par de minutos. Cuando termine, recarga esta página.
            </p>
          </div>
        )}

        {error && !error.includes(AVISO_CATALOGO) && (
          <p className="rounded-lg border border-alerta/30 bg-alerta/10 px-3 py-2 text-sm text-alerta">
            {error}
          </p>
        )}

        {buscando && <Esqueleto />}

        {!buscando && !error && enviada && resultados.length === 0 && (
          <div className="rounded-xl border border-dashed border-borde px-6 py-14 text-center">
            <p className="text-sm text-texto">Nada para «{enviada}».</p>
            <p className="mt-1 text-sm text-texto-sec">
              Prueba con el apellido del autor, o el título en su idioma original.
            </p>
          </div>
        )}

        {!buscando && resultados.length > 0 && (
          <>
            <p className="mb-4 text-xs text-texto-ter">
              {total.toLocaleString('es')} resultados · mostrando {resultados.length}
            </p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-4">
              {resultados.map((r) => (
                <TarjetaFuente
                  key={r.gutenbergId}
                  libro={r}
                  estado={estado[r.gutenbergId]}
                  onImportar={() => importar(r)}
                />
              ))}
            </div>
          </>
        )}

        {!enviada && !buscando && (
          <div className="rounded-xl border border-dashed border-borde px-6 py-14 text-center">
            <p className="text-sm text-texto">Busca algo para empezar.</p>
            <p className="mx-auto mt-1 max-w-sm text-sm text-texto-sec">
              Todo lo que encuentres aquí es de dominio público: libre de derechos
              y legal de leer y guardar.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

function TarjetaFuente({ libro, estado, onImportar }) {
  const yaEstaba = libro.importado;
  const listo = estado === 'listo';
  const importando = estado === 'importando';
  const fallo = estado && !listo && !importando ? estado : '';
  const enEstante = yaEstaba || listo;

  return (
    <div className="flex flex-col">
      <div className="relative">
        <Portada titulo={libro.titulo} autor={libro.autor} portadaUrl={libro.portadaUrl} />

        {importando && (
          <div className="absolute inset-0 grid place-items-center rounded bg-fondo/70 backdrop-blur-[2px]">
            <span className="text-xs font-medium text-ambar">Importando…</span>
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="line-clamp-2 text-sm font-medium leading-snug text-texto">
          {libro.titulo}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-xs text-texto-sec">{libro.autor}</p>

        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {libro.idiomas?.slice(0, 2).map((i) => (
            <span key={i} className="rounded border border-borde px-1.5 py-0.5 text-[0.65rem] text-texto-ter">
              {IDIOMAS[i] ?? i.toUpperCase()}
            </span>
          ))}
          {libro.descargas > 0 && (
            <span className="rounded border border-borde px-1.5 py-0.5 text-[0.65rem] tabular-nums text-texto-ter">
              {libro.descargas.toLocaleString('es')} descargas
            </span>
          )}
        </div>

        <div className="mt-auto pt-3">
          {enEstante ? (
            <Link
              to="/"
              className="block rounded-lg border border-exito/40 bg-exito/10 py-1.5 text-center
                         text-xs font-semibold text-exito transition-colors hover:bg-exito/20"
            >
              ✓ En tu estante
            </Link>
          ) : (
            <button
              onClick={onImportar}
              disabled={importando}
              className="w-full rounded-lg border border-borde py-1.5 text-xs font-medium
                         text-texto-sec transition-colors hover:border-ambar hover:text-ambar
                         disabled:opacity-50"
            >
              {importando ? 'Importando…' : 'Añadir al estante'}
            </button>
          )}

          {fallo && <p className="mt-1.5 text-[0.68rem] text-alerta">{fallo}</p>}
        </div>
      </div>
    </div>
  );
}

function Esqueleto() {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-[2/3] rounded bg-elevado" />
          <div className="mt-3 h-3 w-4/5 rounded bg-elevado" />
          <div className="mt-2 h-2.5 w-2/5 rounded bg-elevado" />
          <div className="mt-3 h-7 rounded-lg bg-elevado" />
        </div>
      ))}
    </div>
  );
}
