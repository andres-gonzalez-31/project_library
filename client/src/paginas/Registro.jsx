import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { useAuth } from '../auth';
import Campo from '../componentes/Campo';

const REGLAS = [
  { prueba: (v) => v.length >= 10, texto: 'Mínimo 10 caracteres' },
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
  const valida = REGLAS.every((r) => r.prueba(form.password));

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
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <form onSubmit={enviar} className="w-full max-w-sm bg-cuero-oscuro/40 p-8 rounded-lg
                                         border border-cuero/50 shadow-2xl">
        <h1 className="text-3xl text-papel mb-6 text-center"
            style={{ fontFamily: 'var(--font-lectura)' }}>
          Crear cuenta
        </h1>

        <Campo etiqueta="Nombre" name="nombre" value={form.nombre}
               onChange={cambiar} required minLength={2} />

        <Campo etiqueta="Correo" type="email" name="email" value={form.email}
               onChange={cambiar} required autoComplete="email" />

        <Campo etiqueta="Contraseña" type="password" name="password" value={form.password}
               onChange={cambiar} required autoComplete="new-password" />

        <ul className="text-xs mb-4 space-y-1">
          {REGLAS.map((r) => {
            const ok = r.prueba(form.password);
            return (
              <li key={r.texto} className={ok ? 'text-green-300' : 'text-papel/50'}>
                {ok ? '✓' : '○'} {r.texto}
              </li>
            );
          })}
        </ul>

        {error && (
          <p className="text-red-300 text-sm mb-4 bg-red-900/30 p-2 rounded">{error}</p>
        )}

        <button type="submit" disabled={enviando || !valida}
          className="w-full py-2 rounded bg-cuero text-papel font-medium
                     hover:bg-cuero-oscuro disabled:opacity-50 transition">
          {enviando ? 'Creando...' : 'Crear cuenta'}
        </button>

        <p className="text-center text-papel/70 text-sm mt-4">
          ¿Ya tienes cuenta? <Link to="/login" className="underline hover:text-papel">Entra</Link>
        </p>
      </form>
    </div>
  );
}