import { useState } from 'react';

const TOPE = 2000;

/**
 * Panel que aparece al parar de leer: resumen de lo leido y
 * observaciones del lector, uno al lado del otro.
 */
export default function PanelNotas({
  titulo,
  pagina,
  total,
  terminado,
  inicial = {},
  guardando,
  error,
  onGuardar,
  onCancelar,
}) {
  const [resumen, setResumen] = useState(inicial.resumen ?? '');
  const [observaciones, setObservaciones] = useState(inicial.observaciones ?? '');

  return (
    <div
      className="fixed inset-0 z-30 flex items-end justify-center bg-fondo/80 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Guardar lectura"
    >
      <div className="w-full max-w-2xl rounded-xl border border-borde bg-panel p-5 shadow-2xl shadow-black/50 sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold tracking-tight text-texto">
              {terminado ? 'Terminaste el libro' : 'Guardar dónde quedaste'}
            </h2>
            <p className="mt-0.5 text-sm text-texto-sec">
              {titulo} · página {pagina} de {total}
            </p>
          </div>
          {terminado && (
            <span className="shrink-0 rounded-full bg-exito/15 px-2.5 py-1 text-xs font-semibold text-exito">
              Leído
            </span>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Caja
            etiqueta="Resumen de lo leído"
            pista="Qué pasó hasta aquí, para retomar sin releer."
            valor={resumen}
            onChange={setResumen}
          />
          <Caja
            etiqueta="Observaciones"
            pista="Tu opinión, una frase que te gustó, una duda."
            valor={observaciones}
            onChange={setObservaciones}
          />
        </div>

        {error && (
          <p className="mt-4 rounded-lg border border-alerta/30 bg-alerta/10 px-3 py-2 text-xs text-alerta">
            {error}
          </p>
        )}

        <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            onClick={onCancelar}
            disabled={guardando}
            className="rounded-lg border border-borde px-4 py-2 text-sm text-texto-sec
                       transition-colors hover:text-texto disabled:opacity-50"
          >
            Seguir leyendo
          </button>
          <button
            onClick={() => onGuardar({ resumen, observaciones })}
            disabled={guardando}
            className="rounded-lg bg-ambar px-5 py-2 text-sm font-semibold text-sobre-ambar
                       transition-colors hover:bg-ambar-alto disabled:opacity-50"
          >
            {guardando ? 'Guardando…' : 'Guardar y salir'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Caja({ etiqueta, pista, valor, onChange }) {
  const cerca = valor.length > TOPE - 200;
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-texto-sec">{etiqueta}</label>
      <textarea
        value={valor}
        maxLength={TOPE}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        placeholder={pista}
        className="w-full resize-y rounded-lg border border-borde bg-elevado px-3 py-2.5
                   text-sm leading-relaxed text-texto placeholder:text-texto-ter
                   outline-none transition-colors focus:border-ambar"
      />
      <p className={`mt-1 text-right text-[0.68rem] tabular-nums ${cerca ? 'text-alerta' : 'text-texto-ter'}`}>
        {valor.length} / {TOPE}
      </p>
    </div>
  );
}
