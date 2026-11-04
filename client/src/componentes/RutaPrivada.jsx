import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth';

export default function RutaPrivada({ children }) {
  const { usuario, cargando } = useAuth();

  if (cargando) {
    return (
      <div className="min-h-screen flex items-center justify-center text-papel/60">
        Cargando...
      </div>
    );
  }

  return usuario ? children : <Navigate to="/login" replace />;
}