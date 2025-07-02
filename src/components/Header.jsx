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
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <span style={{ fontSize: '1.8rem', marginRight: '0.5rem' }}>🛍️</span>
        <span style={{ fontSize: '1.8rem', fontFamily: 'Georgia, serif', color: 'white' }}>
          Tienda Grupo N°14 🛒
        </span>
      </Link>

      <div className="d-flex align-items-center">
        <Link to="/favoritos" className="btn btn-outline-light me-2">
          Favoritos
        </Link>

        <Link to="/crear" className="btn btn-outline-success me-3">
          Crear Producto
        </Link>

        {user && (
          <>
            <span className="text-light me-3">Bienvenido, {user.email}</span>
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;