import { useId, useState } from 'react';

export default function Campo({ etiqueta, error, pista, type = 'text', ...props }) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const esClave = type === 'password';
  const tipoReal = esClave && visible ? 'text' : type;

  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-texto-sec">
        {etiqueta}
      </label>

      <div className="relative">
        <input
          id={id}
          type={tipoReal}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-err` : undefined}
          {...props}
          className={`w-full rounded-lg border bg-elevado px-3 py-2.5 text-sm text-texto
                      placeholder:text-texto-ter outline-none transition-colors
                      ${esClave ? 'pr-16' : ''}
                      ${error ? 'border-alerta' : 'border-borde focus:border-ambar'}`}
        />

        {esClave && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            tabIndex={-1}
            aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            className="absolute inset-y-0 right-0 px-3 text-xs font-medium
                       text-texto-ter transition-colors hover:text-ambar"
          >
            {visible ? 'Ocultar' : 'Ver'}
          </button>
        )}
      </div>

      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-xs text-alerta">{error}</p>
      )}
      {!error && pista && (
        <p className="mt-1.5 text-xs text-texto-ter">{pista}</p>
      )}
    </div>
  );
}
