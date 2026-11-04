import { createContext, useContext, useEffect, useState } from 'react';
import { api } from './api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    api.yo()
      .then((d) => setUsuario(d.usuario))
      .catch(() => setUsuario(null))
      .finally(() => setCargando(false));
  }, []);

  const entrar = async (datos) => {
    const d = await api.login(datos);
    setUsuario(d.usuario);
  };

  const salir = async () => {
    await api.logout().catch(() => {});
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, cargando, entrar, salir, setUsuario }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);