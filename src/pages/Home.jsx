import { useProductos } from '../context/ProductosContext'; // agregado para poder ver los prodcutos creados ( rama fix/crear-producto)
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

function Home() {
  const { productos } = useProductos(); // todos los productos (API + nuevos)

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de productos</h2>
      <Link to="/crear">
        <button className="btn btn-success mb-3">➕ Crear nuevo producto</button>
      </Link>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4 mb-4" key={producto.id}>
            <ProductCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

