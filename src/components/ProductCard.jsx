import { useNavigate } from 'react-router-dom';
import { useFavoritos } from '../context/FavoritosContext';

function ProductCard({ producto }) {
  const navigate = useNavigate();
  const { favoritos, toggleFavorito } = useFavoritos();

  const esFavorito = favoritos.some(p => p.id === producto.id);

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '8px',
      width: '200px'
    }}>
      <img
        src={producto.image}
        alt={producto.title}
        style={{ width: '100px', height: '100px', objectFit: 'contain' }}
      />
      <h3>{producto.title}</h3>
      <p>💵 ${producto.price}</p>
      <p>{producto.category}</p>
      <button onClick={() => navigate(`/producto/${producto.id}`)}>
        Ver más detalles
      </button>
      <br />
      <button onClick={() => toggleFavorito(producto)}>
        {esFavorito ? '💔 Quitar de Favoritos' : '💖 Agregar a Favoritos'}
      </button>
    </div>
  );
}

export default ProductCard;

