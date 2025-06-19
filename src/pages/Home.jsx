import { useFavoritos } from '../context/FavoritosContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

function Home() {
  const { productosApi, productosCreados } = useFavoritos();
  const todosLosProductos = [...productosCreados, ...productosApi];

  return (
   <div className="container mt-4">
  <h1 className="mb-4 text-center">Lista de productos</h1>

  <div className="row">
    {todosLosProductos.map((producto) => (
      <div className="col-md-4 mb-4" key={producto.id}>
        <ProductCard producto={producto} />
      </div>
    ))}
  </div>
</div>


  );
}

export default Home;

