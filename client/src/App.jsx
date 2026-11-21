import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth';
import RutaPrivada from './componentes/RutaPrivada';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import Catalogo from './paginas/Catalogo';
import Lector from './paginas/Lector';
import MisLecturas from './paginas/MisLecturas';
import Explorar from './paginas/Explorar';

const privada = (el) => <RutaPrivada>{el}</RutaPrivada>;

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

          <Route path="/" element={privada(<Catalogo />)} />
          <Route path="/leer/:id" element={privada(<Lector />)} />

          <Route path="/explorar" element={privada(<Explorar />)} />
          <Route path="/mis-lecturas" element={privada(<MisLecturas />)} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
