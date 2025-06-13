function ProductCard({ producto }) {
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
      <button>Ver más detalles</button>
    </div>
  );
}

export default ProductCard;
