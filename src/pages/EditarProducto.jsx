import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useProductos } from '../context/ProductosContext';
import ProductForm from '../components/ProductForm';

function EditarProducto() {
  const { id } = useParams();
  const { productos, actualizarProducto } = useProductos();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Intentar encontrar el producto en el contexto local primero
    const productoLocal = productos.find(p => String(p.id) === id);

    if (productoLocal) {
      setProducto(productoLocal);
    } else if (Number(id) <= 20) { // Solo pedir a la API si es ID original (1-20)
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
          if (!res.ok) throw new Error(`Producto con ID ${id} no encontrado`);
          return res.json();
        })
        .then(data => setProducto(data))
        .catch(error => console.error('Error al traer el producto:', error));
    } else {
      // Si no está ni local ni en la API, no se puede editar
      console.error(`Producto con ID ${id} no encontrado`);
    }
  }, [id, productos]);

  const handleEditar = (productoEditado) => {
    console.log('Producto editado:', productoEditado);
    actualizarProducto(productoEditado); // actualiza en contexto
    navigate('/');
  };

  if (!producto) return <p>Cargando producto para editar...</p>;

  return <ProductForm productoInicial={producto} onSubmit={handleEditar} />;
}

export default EditarProducto;

