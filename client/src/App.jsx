import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth';
import RutaPrivada from './componentes/RutaPrivada';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import Catalogo from './paginas/Catalogo';
import Lector from './paginas/Lector';


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/" element={<RutaPrivada><Catalogo /></RutaPrivada>} />
          <Route path="/leer/:id" element={<RutaPrivada><Lector /></RutaPrivada>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}