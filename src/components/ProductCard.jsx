import { useNavigate } from 'react-router-dom';

function ProductCard({ producto }) {
  const navigate = useNavigate();

  const verDetalles = () => {
    navigate(`/producto/${producto.id}`);
  };

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
      <button onClick={verDetalles}>Ver más detalles</button>
    </div>
  );
}

export default ProductCard;

