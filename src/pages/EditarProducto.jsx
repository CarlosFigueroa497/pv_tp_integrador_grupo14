import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';

function EditarProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProducto(data))
      .catch(error => console.error('Error al traer el producto:', error));
  }, [id]);

  const handleEditar = (productoEditado) => {
    console.log('Producto editado:', productoEditado);
    
  };

  if (!producto) return <p>Cargando producto para editar...</p>;

  return <ProductForm productoInicial={producto} onSubmit={handleEditar} />;
}

export default EditarProducto;

