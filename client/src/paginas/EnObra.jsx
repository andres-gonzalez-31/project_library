import Encabezado from '../componentes/Encabezado';

export default function EnObra({ titulo, texto }) {
  return (
    <div className="min-h-screen">
      <Encabezado />
      <main className="mx-auto max-w-6xl px-4 py-7">
        <div className="rounded-xl border border-dashed border-borde px-6 py-16 text-center">
          <h1 className="text-lg font-semibold tracking-tight text-texto">{titulo}</h1>
          <p className="mx-auto mt-2 max-w-sm text-sm text-texto-sec">{texto}</p>
        </div>
      </main>
    </div>
  );
}
