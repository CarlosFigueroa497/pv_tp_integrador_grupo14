import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar px-4 py-3" style={{ backgroundColor: 'black' }}>
      <Link to="/" className="navbar-brand d-flex align-items-center">
  <span style={{ fontSize: '1.8rem', marginRight: '0.5rem' }}>🛍️</span>
 <span style={{ fontSize: '1.8rem', fontFamily: 'Georgia, serif', color: 'white'}}>Tienda Grupo N°14 🛒</span>
</Link>
      <div>
        <Link to="/favoritos" className="btn btn-outline-light me-2">
          Favoritos
        </Link>
        <Link to="/crear" className="btn btn-outline-success">
          Crear Producto
        </Link>
      </div>
    </nav>
  );
}

export default Header;