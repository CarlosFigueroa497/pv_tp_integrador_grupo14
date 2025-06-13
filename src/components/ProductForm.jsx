import { useState, useEffect } from 'react';

function ProductForm({ productoInicial = null, onSubmit }) {
  const [producto, setProducto] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    if (productoInicial) {
      setProducto(productoInicial);
    }
  }, [productoInicial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(producto);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>{productoInicial ? 'Editar' : 'Crear'} Producto</h2>
      <input
        type="text"
        name="title"
        placeholder="Nombre"
        value={producto.title}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Precio"
        value={producto.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Categoría"
        value={producto.category}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Descripción"
        value={producto.description}
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="text"
        name="image"
        placeholder="URL de imagen"
        value={producto.image}
        onChange={handleChange}
        required
      />
      <button type="submit">{productoInicial ? 'Guardar Cambios' : 'Crear Producto'}</button>
    </form>
  );
}

export default ProductForm;
