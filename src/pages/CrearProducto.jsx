import ProductForm from '../components/ProductForm';
import { useProductos } from '../context/ProductosContext'; 
import { useNavigate } from 'react-router-dom';

function CrearProducto() {
  const { agregarProducto } = useProductos(); 
  const navigate = useNavigate();

  const handleCrear = (nuevoProducto) => {
    agregarProducto(nuevoProducto); // agrega a la lista global
    navigate('/');
  };

  return <ProductForm onSubmit={handleCrear} />;
}

export default CrearProducto;
