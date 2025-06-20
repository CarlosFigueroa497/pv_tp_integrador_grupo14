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

  setProducto({
    ...producto,
    [name]: name === 'price' ? parseFloat(value) : value,
  });
};


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(producto);
  };

  return (
   <form onSubmit={handleSubmit} className="bg-secondary text-light p-4 rounded">
  <h2 className="mb-3">{productoInicial ? 'Editar' : 'Crear'} Producto</h2>
  <div className="mb-3">
    <input type="text" name="title" className="form-control" placeholder="Nombre" value={producto.title} onChange={handleChange} required />
  </div>
  <div className="mb-3">
    <input type="number" name="price" className="form-control" placeholder="Precio" value={producto.price} onChange={handleChange} required />
  </div>
  <div className="mb-3">
    <input type="text" name="category" className="form-control" placeholder="Categoría" value={producto.category} onChange={handleChange} required />
  </div>
  <div className="mb-3">
    <textarea name="description" className="form-control" placeholder="Descripción" value={producto.description} onChange={handleChange} required />
  </div>
  <div className="mb-3">
    <input type="text" name="image" className="form-control" placeholder="URL de imagen" value={producto.image} onChange={handleChange} required />
  </div>
  <button type="submit" className="btn btn-success">
    {productoInicial ? 'Guardar Cambios' : 'Crear Producto'}
  </button>
</form>

  );
}

export default ProductForm;
