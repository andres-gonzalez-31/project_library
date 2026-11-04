import { forwardRef } from 'react';

const Hoja = forwardRef(({ numero, contenido, total }, ref) => (
  <div ref={ref} className="hoja">
    <div className="hoja-interior">
      <p className="hoja-texto">{contenido}</p>
      <span className="hoja-folio">{numero} / {total}</span>
    </div>
  </div>
));

Hoja.displayName = 'Hoja';
export default Hoja;

export const Portada = forwardRef(({ titulo, autor }, ref) => (
  <div ref={ref} className="hoja portada">
    <div className="portada-interior">
      <h2 className="portada-titulo">{titulo}</h2>
      <div className="portada-linea" />
      <p className="portada-autor">{autor}</p>
    </div>
  </div>
));

Portada.displayName = 'Portada';

export const Contraportada = forwardRef((props, ref) => (
  <div ref={ref} className="hoja portada">
    <div className="portada-interior">
      <p className="portada-autor">Fin</p>
    </div>
  </div>
));

Contraportada.displayName = 'Contraportada';