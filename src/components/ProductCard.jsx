import { useNavigate } from 'react-router-dom';
import { useFavoritos } from '../context/FavoritosContext';

function ProductCard({ producto }) {
  const navigate = useNavigate();
  const { favoritos, toggleFavorito, eliminarProducto, productosCreados } = useFavoritos();

  const esFavorito = favoritos.some(p => p.id === producto.id);
  const fueCreado = productosCreados.some(p => p.id === producto.id);

  return (
<div className="card text-bg-dark h-100">
  <img src={producto.image} className="card-img-top" alt={producto.title} />
  <div className="card-body">
    <h5 className="card-title">{producto.title}</h5>
    <p className="card-text">${producto.price}</p>
    <p className="card-text">{producto.category}</p>
    <button onClick={() => navigate(`/producto/${producto.id}`)} className="btn btn-outline-light mb-2">
      Ver más detalles
    </button>
    <button onClick={() => toggleFavorito(producto)} className="btn btn-outline-danger">
      {esFavorito ? '💔 Quitar de Favoritos' : '💖 Agregar a Favoritos'}
    </button>
    {fueCreado && (
      <button onClick={() => eliminarProducto(producto.id)} className="btn btn-danger mt-2">
        🗑️ Eliminar producto
      </button>
    )}
  </div>
</div>


  );
}

export default ProductCard;

