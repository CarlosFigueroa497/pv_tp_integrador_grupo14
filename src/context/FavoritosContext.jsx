import { createContext, useState, useContext } from 'react';

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (producto) => {
    const yaEsta = favoritos.find(p => p.id === producto.id);
    if (yaEsta) {
      setFavoritos(favoritos.filter(p => p.id !== producto.id));
    } else {
      setFavoritos([...favoritos, producto]);
    }
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}
