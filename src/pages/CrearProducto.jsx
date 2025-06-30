import ProductForm from '../components/ProductForm';
import { useProductos } from '../context/ProductosContext'; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function CrearProducto() {
  const { agregarProducto } = useProductos(); 
  const navigate = useNavigate();

    const handleCrear = (nuevoProducto) => {
    agregarProducto(nuevoProducto);
    toast.success('Producto creado con éxito!');  // <- notificación aquí
    setTimeout(() => {
  navigate('/');
}, 1000);
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: '600px' }}>
        <ProductForm onSubmit={handleCrear} />
      </div>
    </div>
  );
}

export default CrearProducto;
