import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import Campo from '../componentes/Campo';

export default function Login() {
  const { entrar } = useAuth();
  const navegar = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [enviando, setEnviando] = useState(false);

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function enviar(e) {
    e.preventDefault();
    setError('');
    setEnviando(true);
    try {
      await entrar(form);
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
          <h1 className="text-xl font-semibold tracking-tight text-texto">Biblioteca</h1>
          <p className="mt-1 text-sm text-texto-sec">Entra para seguir leyendo</p>
        </div>

        <form
          onSubmit={enviar}
          className="rounded-xl border border-borde bg-panel p-6 shadow-xl shadow-black/30"
        >
          <Campo
            etiqueta="Correo"
            type="email"
            name="email"
            value={form.email}
            onChange={cambiar}
            placeholder="tucorreo@ejemplo.com"
            required
            autoComplete="email"
            autoFocus
          />

          <Campo
            etiqueta="Contraseña"
            type="password"
            name="password"
            value={form.password}
            onChange={cambiar}
            placeholder="Tu contraseña"
            required
            autoComplete="current-password"
          />

          {error && (
            <p className="mb-4 rounded-lg border border-alerta/30 bg-alerta/10 px-3 py-2 text-xs text-alerta">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={enviando}
            className="w-full rounded-lg bg-ambar py-2.5 text-sm font-semibold text-sobre-ambar
                       transition-colors hover:bg-ambar-alto disabled:opacity-50"
          >
            {enviando ? 'Entrando…' : 'Entrar'}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-texto-sec">
          ¿Aún no tienes cuenta?{' '}
          <Link to="/registro" className="font-medium text-ambar hover:text-ambar-alto">
            Crear una
          </Link>
        </p>
      </div>
    </div>
  );
}
