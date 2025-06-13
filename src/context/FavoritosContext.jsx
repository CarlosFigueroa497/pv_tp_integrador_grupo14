import { createContext, useState, useContext, useEffect } from 'react';

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem('favoritos');
    return guardados ? JSON.parse(guardados) : [];
  });

  
  const [productosCreados, setProductosCreados] = useState(() => {
    const guardados = localStorage.getItem('productosCreados');
    return guardados ? JSON.parse(guardados) : [];
  });

  
  const [productosApi, setProductosApi] = useState([]);

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductosApi(data))
      .catch(error => console.error('Error al cargar productos desde API:', error));
  }, []);

  
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  
  useEffect(() => {
    localStorage.setItem('productosCreados', JSON.stringify(productosCreados));
  }, [productosCreados]);

 
  const toggleFavorito = (producto) => {
    const yaEsta = favoritos.find(p => p.id === producto.id);
    if (yaEsta) {
      setFavoritos(favoritos.filter(p => p.id !== producto.id));
    } else {
      setFavoritos([...favoritos, producto]);
    }
  };

  
  const agregarProducto = (nuevoProducto) => {
    const conID = { ...nuevoProducto, id: Date.now() };
    setProductosCreados([...productosCreados, conID]);
  };

  
  const eliminarProducto = (id) => {
    setProductosCreados(productosCreados.filter(p => p.id !== id));
  };

  return (
    <FavoritosContext.Provider value={{
      favoritos,
      toggleFavorito,
      productosCreados,
      agregarProducto,
      eliminarProducto,
      productosApi
    }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}


