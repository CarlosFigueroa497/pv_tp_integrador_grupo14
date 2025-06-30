
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

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      <BrowserRouter>
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/producto/:id/editar" element={<EditarProducto />} />
            <Route path="/crear" element={<CrearProducto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    <ToastContainer
  style={{ zIndex: 9999, backgroundColor: '#222', color: 'white' }} // << Aca va
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

