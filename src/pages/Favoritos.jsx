import { useFavoritos } from '../context/FavoritosContext';
import ProductCard from '../components/ProductCard';

function Favoritos() {
  const { favoritos } = useFavoritos();

  if (favoritos.length === 0) {
    return <h2 className="text-center mt-5">No hay productos favoritos aún.</h2>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Mis Favoritos</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {favoritos.map(producto => (
          <div className="col" key={producto.id}>
            <ProductCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favoritos;
