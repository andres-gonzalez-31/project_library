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
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={enviar} className="w-full max-w-sm bg-cuero-oscuro/40 p-8 rounded-lg
                                         border border-cuero/50 shadow-2xl">
        <h1 className="text-3xl text-papel mb-6 text-center"
            style={{ fontFamily: 'var(--font-lectura)' }}>
          Biblioteca
        </h1>

        <Campo etiqueta="Correo" type="email" name="email" value={form.email}
               onChange={cambiar} required autoComplete="email" />

        <Campo etiqueta="Contraseña" type="password" name="password" value={form.password}
               onChange={cambiar} required autoComplete="current-password" />

        {error && (
          <p className="text-red-300 text-sm mb-4 bg-red-900/30 p-2 rounded">{error}</p>
        )}

        <button type="submit" disabled={enviando}
          className="w-full py-2 rounded bg-cuero text-papel font-medium
                     hover:bg-cuero-oscuro disabled:opacity-50 transition">
          {enviando ? 'Entrando...' : 'Entrar'}
        </button>

        <p className="text-center text-papel/70 text-sm mt-4">
          ¿Sin cuenta? <Link to="/registro" className="underline hover:text-papel">Regístrate</Link>
        </p>
      </form>
    </div>
  );
}