import ProductForm from '../components/ProductForm';

function CrearProducto() {
  const handleCrear = (nuevoProducto) => {
    console.log('Producto creado:', nuevoProducto);
    
  };

  return <ProductForm onSubmit={handleCrear} />;
}

export default CrearProducto;
