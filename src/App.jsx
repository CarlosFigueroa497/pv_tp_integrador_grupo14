
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import DetalleProducto from './pages/DetalleProducto';
import CrearProducto from './pages/CrearProducto';
import EditarProducto from './pages/EditarProducto';
import Header from './components/Header';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Registro from './pages/Registro';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      <BrowserRouter>
        <Header />
        <div className="flex-grow-1">
          <Routes>
  {/* Rutas públicas */}
  <Route path="/login" element={<Login />} />
  <Route path="/registro" element={<Registro />} />

  {/* Rutas privadas */}
<Route path="/" element={
    <PrivateRoute>
      <Home />
    </PrivateRoute>
  } />

  <Route path="/favoritos" element={
    <PrivateRoute>
      <Favoritos />
    </PrivateRoute>
  } />

  <Route path="/producto/:id" element={
    <PrivateRoute>
      <DetalleProducto />
    </PrivateRoute>
  } />

  <Route path="/producto/:id/editar" element={
    <PrivateRoute>
      <EditarProducto />
    </PrivateRoute>
  } />

  <Route path="/crear" element={
    <PrivateRoute>
      <CrearProducto />
    </PrivateRoute>
  } />
</Routes>
        </div>
        <Footer />
      </BrowserRouter>
    <ToastContainer
  style={{ zIndex: 9999, backgroundColor: '#222', color: 'white' }}
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
/>
    </div>
  );
}

export default App;

