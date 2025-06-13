import ProductForm from '../components/ProductForm';
import { useFavoritos } from '../context/FavoritosContext';
import { useNavigate } from 'react-router-dom';

function CrearProducto() {
  const { agregarProducto } = useFavoritos();
  const navigate = useNavigate();

  const handleCrear = (nuevoProducto) => {
    agregarProducto(nuevoProducto);
    navigate('/'); 
  };

  return <ProductForm onSubmit={handleCrear} />;
}

export default CrearProducto;
