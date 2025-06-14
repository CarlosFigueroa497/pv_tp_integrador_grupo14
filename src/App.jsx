import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import DetalleProducto from './pages/DetalleProducto';
import CrearProducto from './pages/CrearProducto';
import EditarProducto from './pages/EditarProducto';




function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      <BrowserRouter>

        {/* Navbar visible en todas las páginas */}
        <nav className="navbar navbar-dark bg-dark px-4">
          <Link to="/" className="navbar-brand">🛍️ Tienda</Link>
          <div>
            <Link to="/favoritos" className="btn btn-outline-light me-2">Favoritos</Link>
            <Link to="/crear" className="btn btn-outline-success">Crear Producto</Link>
          </div>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/producto/:id/editar" element={<EditarProducto />} />
          <Route path="/crear" element={<CrearProducto />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

