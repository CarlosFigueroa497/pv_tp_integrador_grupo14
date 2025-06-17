import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProducto(data))
      .catch(error => console.error('Error al cargar producto:', error));
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div style={{ 
  padding: '2rem', 
  backgroundColor: '#1e1e1e', 
  color: '#f0f0f0', 
  fontFamily: 'Poppins, sans-serif', 
  borderRadius: '12px',
  maxWidth: '800px',
  margin: '0 auto'
}}>
  <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>
    {producto.title}
  </h2>

  <img
    src={producto.image}
    alt={producto.title}
    style={{
      width: '200px',
      height: '200px',
      objectFit: 'contain',
      borderRadius: '10px',
      backgroundColor: '#fff',
      padding: '0.5rem',
      marginBottom: '1rem'
    }}
  />

  <p style={{ fontSize: '1.2rem' }}>
    <strong style={{ color: '#ccc' }}>💰 Precio:</strong>{' '}
    <span style={{ color: '#00ffab', fontWeight: 'bold' }}>${producto.price}</span>
  </p>

  <p style={{ fontSize: '1.1rem' }}>
    <strong style={{ color: '#ccc' }}>📁 Categoría:</strong>{' '}
    <span style={{ color: '#fce38a' }}>{producto.category}</span>
  </p>

  <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
    <strong style={{ color: '#ccc' }}>📝 Descripción:</strong>{' '}
    {producto.description}
  </p>

  <button
  className="boton-editar"
  onClick={() => navigate(`/producto/${producto.id}/editar`)}
>
  ✍️ <span>Editar producto</span>
</button>
</div>
  );
}

export default DetalleProducto;


