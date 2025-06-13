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
    <div style={{ padding: '2rem' }}>
      <h2>{producto.title}</h2>
      <img
        src={producto.image}
        alt={producto.title}
        style={{ width: '200px', height: '200px', objectFit: 'contain' }}
      />
      <p><strong>Precio:</strong> ${producto.price}</p>
      <p><strong>Categoría:</strong> {producto.category}</p>
      <p><strong>Descripción:</strong> {producto.description}</p>

      
      <button onClick={() => navigate(`/producto/${producto.id}/editar`)}>
        ✏️ Editar producto
      </button>
    </div>
  );
}

export default DetalleProducto;


