import { useFavoritos } from '../context/FavoritosContext';
import ProductCard from '../components/ProductCard';

function Favoritos() {
  const { favoritos } = useFavoritos();

  if (favoritos.length === 0) {
    return <h2>No hay productos favoritos aún.</h2>;
  }

  return (
    <div>
      <h2>Mis Favoritos</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {favoritos.map(producto => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default Favoritos;
