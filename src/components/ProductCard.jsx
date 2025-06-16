import { useNavigate } from 'react-router-dom';
import { useFavoritos } from '../context/FavoritosContext';

function ProductCard({ producto }) {
  const navigate = useNavigate();
  const { favoritos, toggleFavorito, eliminarProducto, productosCreados } = useFavoritos();

  const esFavorito = favoritos.some(p => p.id === producto.id);
  const fueCreado = productosCreados.some(p => p.id === producto.id);

return (
  <div className="card h-100 d-flex flex-column justify-content-between shadow-sm" style={{ minHeight: '100%', maxHeight: '100%', overflow: 'hidden' }}>
    <img
      src={producto.image}
      className="card-img-top"
      alt={producto.title}
      style={{ objectFit: 'contain', height: '200px' }}
    />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title text-truncate">{producto.title}</h5>
      <p className="card-text">${producto.price}</p>
      <p className="card-text text-muted">{producto.category}</p>
      <div className="mt-auto">
        <button
          onClick={() => navigate(`/producto/${producto.id}`)}
          className="btn btn-outline-primary btn-sm w-100 mb-2"
        >
          Ver más detalles
        </button>
        <button
          onClick={() => toggleFavorito(producto)}
          className="btn btn-outline-danger btn-sm w-100"
        >
          {esFavorito ? '💔 Quitar de Favoritos' : '💖 Agregar a Favoritos'}
        </button>
        {fueCreado && (
          <button
            onClick={() => eliminarProducto(producto.id)}
            className="btn btn-danger btn-sm w-100 mt-2"
          >
            🗑️ Eliminar producto
          </button>
        )}
      </div>
    </div>
  </div>
);

}

export default ProductCard;

