import { useState } from 'react';

/**
 * Portada de un libro con cascada de respaldo:
 *   1. imagen real (portadaUrl guardada y validada por el backend)
 *   2. si la imagen falla al cargar -> respaldo tipografico
 *   3. si no hay URL -> respaldo tipografico directo
 *
 * El color del respaldo se deriva del titulo, asi el mismo libro
 * sale siempre del mismo color y el estante no parpadea entre recargas.
 */

// Paleta sobria: tonos de encuadernacion, nada estridente.
const ENCUADERNACIONES = [
  { cara: '#3b4350', lomo: '#252b34' }, // pizarra
  { cara: '#4a3f52', lomo: '#2f2836' }, // ciruela
  { cara: '#3d4a44', lomo: '#26302c' }, // pino
  { cara: '#55423a', lomo: '#352923' }, // cuero
  { cara: '#3a4659', lomo: '#232c3a' }, // indigo
  { cara: '#4f4535', lomo: '#322c21' }, // mostaza apagado
  { cara: '#4a3a3a', lomo: '#2e2323' }, // granate
  { cara: '#35474d', lomo: '#202d31' }, // petroleo
];

function colorDe(texto = '') {
  let h = 0;
  for (let i = 0; i < texto.length; i++) {
    h = (h * 31 + texto.charCodeAt(i)) >>> 0;
  }
  return ENCUADERNACIONES[h % ENCUADERNACIONES.length];
}

export default function Portada({ titulo, autor, portadaUrl, className = '' }) {
  const [fallo, setFallo] = useState(false);
  const { cara, lomo } = colorDe(titulo || autor || '');
  const hayImagen = Boolean(portadaUrl) && !fallo;

  const estilo = {
    '--tomo-fondo': `linear-gradient(150deg, ${cara} 0%, ${lomo} 100%)`,
    '--tomo-lomo': `linear-gradient(90deg, ${lomo}, ${cara})`,
  };

  return (
    <div className={`estante-libro ${className}`}>
      <div className="tomo" style={estilo}>
        <div className="tomo-lomo" />
        <div className="tomo-cara">
          {hayImagen ? (
            <>
              <img
                src={portadaUrl}
                alt={`Portada de ${titulo}`}
                className="tomo-img"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={() => setFallo(true)}
              />
              <div className="tomo-pliegue" />
            </>
          ) : (
            <div className="tomo-respaldo">
              <div className="tomo-filete">
                <p className="tomo-titulo">{titulo}</p>
                <span className="tomo-rayita" />
                <p className="tomo-autor">{autor}</p>
              </div>
            </div>
          )}
        </div>
        <div className="tomo-hojas" />
      </div>
    </div>
  );
}

export { colorDe };
