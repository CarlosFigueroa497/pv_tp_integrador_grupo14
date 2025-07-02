import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

return (
  <nav className="navbar px-4 py-3" style={{ backgroundColor: 'black' }}>
    <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
      <Link to="/" className="navbar-brand d-flex align-items-center">
  {/* agregue la clase 'brand-icon' para controlar el tamaño del ícono */}
  <span className="brand-icon" style={{ marginRight: '0.5rem' }}>🛍️</span>
  {/* Agrgue la clase 'brand-text' para controlar el tamaño del texto del título */}
  <span className="brand-text" style={{ fontFamily: 'Georgia, serif', color: 'white' }}>
    Tienda Grupo N°14 🛒
  </span>
 </Link>

      <div className="d-flex flex-wrap align-items-center justify-content-center gap-2">
        <Link to="/favoritos" className="btn btn-outline-light">
          Favoritos
        </Link>

        <Link to="/crear" className="btn btn-outline-success">
          Crear Producto
        </Link>

        {user && (
          <>
            <span className="text-light">Bienvenido, {user.email}</span>
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </div>
  </nav>
);

}

export default Header;