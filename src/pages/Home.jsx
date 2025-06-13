import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom'; 

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al cargar productos:', error));
  }, []);

  return (
    <div>
      <h2>Lista de productos</h2>

      
      <Link to="/crear">
        <button style={{ marginBottom: '1rem' }}>➕ Crear nuevo producto</button>
      </Link>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        {productos.map(producto => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default Home;
