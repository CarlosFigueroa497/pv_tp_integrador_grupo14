import { useNavigate } from 'react-router-dom';
import { useFavoritos } from '../context/FavoritosContext';

function ProductCard({ producto }) {
  const navigate = useNavigate();
  const { favoritos, toggleFavorito, eliminarProducto, productosCreados } = useFavoritos();

  const esFavorito = favoritos.some(p => p.id === producto.id);
  const fueCreado = productosCreados.some(p => p.id === producto.id);

  return (
    <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '12px' }}>
      <div className="overflow-hidden" style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
        <img
          src={producto.image}
          className="card-img-top product-img"
          alt={producto.title}
          style={{ objectFit: 'contain', height: '200px', padding: '1rem', transition: 'transform 0.3s ease' }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{producto.title}</h5>
        <p className="card-text fw-semibold text-success">${producto.price.toFixed(2)}</p>
        <p className="card-text text-muted">{producto.category}</p>
        <div className="mt-auto d-grid gap-2">
          <button
            onClick={() => navigate(`/producto/${producto.id}`)}
            className="btn btn-primary btn-sm"
          >
            Ver más detalles
          </button>
          <button
            onClick={() => toggleFavorito(producto)}
            className={`btn btn-sm ${esFavorito ? 'btn-outline-danger' : 'btn-outline-success'}`}
          >
            {esFavorito ? '💔 Quitar de Favoritos' : '💖 Agregar a Favoritos'}
          </button>
          {fueCreado && (
            <button
              onClick={() => eliminarProducto(producto.id)}
              className="btn btn-danger btn-sm"
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

