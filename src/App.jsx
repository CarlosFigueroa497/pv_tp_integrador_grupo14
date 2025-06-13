import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import DetalleProducto from './pages/DetalleProducto';
import CrearProducto from './pages/CrearProducto';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/crear" element={<CrearProducto />} />
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
