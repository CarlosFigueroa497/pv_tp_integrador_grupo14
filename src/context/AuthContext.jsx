import { createContext, useContext, useEffect, useState } from 'react';

// Crear el contexto
const AuthContext = createContext();

// Hook
export function useAuth() {
  return useContext(AuthContext);
}

// Obtener usuario de localStorage al iniciar
function getSessionUser() {
  const storedUser = localStorage.getItem('sessionUser');
  return storedUser ? JSON.parse(storedUser) : null;
}

// Proveedor del contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(getSessionUser());

  const login = (userData) => {
    localStorage.setItem('sessionUser', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('sessionUser');
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}