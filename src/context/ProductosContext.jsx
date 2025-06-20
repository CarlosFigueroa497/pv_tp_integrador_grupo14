import { createContext, useContext, useState, useEffect } from 'react';

const ProductosContext = createContext();

export function useProductos() {
  return useContext(ProductosContext);
}

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([]);

  // Carga productos desde API una sola vez
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  // Agregaun nuevo producto a la lista local
  const agregarProducto = (producto) => {
    const nuevoProducto = {
      ...producto,
      id: productos.length + 1000, // ID temporal local
    };
    setProductos([...productos, nuevoProducto]);
  };

  return (
    <ProductosContext.Provider value={{ productos, agregarProducto }}>
      {children}
    </ProductosContext.Provider>
  );
}
