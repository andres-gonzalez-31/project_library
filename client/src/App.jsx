import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth';
import RutaPrivada from './componentes/RutaPrivada';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import Catalogo from './paginas/Catalogo';
import Lector from './paginas/Lector';
import EnObra from './paginas/EnObra';

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

          <Route
            path="/explorar"
            element={privada(
              <EnObra
                titulo="Explorar"
                texto="Aquí vas a buscar clásicos de dominio público y añadirlos a tu estante. En construcción."
              />
            )}
          />
          <Route
            path="/mis-lecturas"
            element={privada(
              <EnObra
                titulo="Mis lecturas"
                texto="Aquí van los libros que empezaste, tu progreso y tus notas. En construcción."
              />
            )}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
