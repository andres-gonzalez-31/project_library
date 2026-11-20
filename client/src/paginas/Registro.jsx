import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { useAuth } from '../auth';
import Campo from '../componentes/Campo';

const REGLAS = [
  { prueba: (v) => v.length >= 10, texto: 'Al menos 10 caracteres' },
  { prueba: (v) => /[a-z]/.test(v), texto: 'Una minúscula' },
  { prueba: (v) => /[A-Z]/.test(v), texto: 'Una mayúscula' },
  { prueba: (v) => /[0-9]/.test(v), texto: 'Un número' },
];

export default function Registro() {
  const { entrar } = useAuth();
  const navegar = useNavigate();
  const [form, setForm] = useState({ nombre: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [enviando, setEnviando] = useState(false);

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const cumplidas = REGLAS.filter((r) => r.prueba(form.password)).length;
  const valida = cumplidas === REGLAS.length;

  async function enviar(e) {
    e.preventDefault();
    setError('');
    setEnviando(true);
    try {
      await api.registro(form);
      await entrar({ email: form.email, password: form.password });
      navegar('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="mb-7 text-center">
          <span className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-xl
                           bg-ambar text-lg font-bold text-sobre-ambar">
            B
          </span>
          <h1 className="text-xl font-semibold tracking-tight text-texto">Crear cuenta</h1>
          <p className="mt-1 text-sm text-texto-sec">Tu progreso y tus notas quedan guardados</p>
        </div>

        <form
          onSubmit={enviar}
          className="rounded-xl border border-borde bg-panel p-6 shadow-xl shadow-black/30"
        >
          <Campo
            etiqueta="Nombre"
            name="nombre"
            value={form.nombre}
            onChange={cambiar}
            placeholder="Cómo quieres que te llamemos"
            required
            minLength={2}
            autoFocus
          />

          <Campo
            etiqueta="Correo"
            type="email"
            name="email"
            value={form.email}
            onChange={cambiar}
            placeholder="tucorreo@ejemplo.com"
            required
            autoComplete="email"
          />

          <Campo
            etiqueta="Contraseña"
            type="password"
            name="password"
            value={form.password}
            onChange={cambiar}
            placeholder="Una que no uses en otro lado"
            required
            autoComplete="new-password"
          />

          <div className="mb-5">
            <div className="mb-2 flex gap-1" aria-hidden="true">
              {REGLAS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i < cumplidas ? 'bg-exito' : 'bg-borde'
                  }`}
                />
              ))}
            </div>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
              {REGLAS.map((r) => {
                const ok = r.prueba(form.password);
                return (
                  <li
                    key={r.texto}
                    className={`text-[0.7rem] ${ok ? 'text-exito' : 'text-texto-ter'}`}
                  >
                    {ok ? '✓' : '○'} {r.texto}
                  </li>
                );
              })}
            </ul>
          </div>

          {error && (
            <p className="mb-4 rounded-lg border border-alerta/30 bg-alerta/10 px-3 py-2 text-xs text-alerta">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={enviando || !valida}
            className="w-full rounded-lg bg-ambar py-2.5 text-sm font-semibold text-sobre-ambar
                       transition-colors hover:bg-ambar-alto disabled:opacity-40"
          >
            {enviando ? 'Creando…' : 'Crear cuenta'}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-texto-sec">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="font-medium text-ambar hover:text-ambar-alto">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
