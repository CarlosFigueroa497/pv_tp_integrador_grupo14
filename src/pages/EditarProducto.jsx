import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useProductos } from '../context/ProductosContext';
import { toast } from 'react-toastify';
import ProductForm from '../components/ProductForm';

function EditarProducto() {
  const { id } = useParams();
  const { productos, actualizarProducto } = useProductos();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const productoLocal = productos.find(p => String(p.id) === id);
    
    if (productoLocal) {
      setProducto(productoLocal);
    } else if (Number(id) <= 20) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
          if (!res.ok) throw new Error(`Producto con ID ${id} no encontrado`);
          return res.json();
        })
        .then(data => setProducto(data))
        .catch(error => console.error('Error al traer el producto:', error));
    } else {

      console.error(`Producto con ID ${id} no encontrado`);
    }
  }, [id, productos]);

  const handleEditar = (productoEditado) => {
    actualizarProducto(productoEditado);
    toast.success('Producto actualizado con éxito!');  // <- notificación aquí
    setTimeout(() => {
  navigate('/');
}, 500);
  };

  if (!producto) return <p className="text-center mt-4">Cargando producto para editar...</p>;

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: '600px' }}>
        <ProductForm productoInicial={producto} onSubmit={handleEditar} />
      </div>
    </div>
  );
}

export default EditarProducto;

