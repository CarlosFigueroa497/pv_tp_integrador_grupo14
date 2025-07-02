import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './context/AuthContext.jsx';           // <-- NUEVO
import { FavoritosProvider } from './context/FavoritosContext.jsx';
import { ProductosProvider } from './context/ProductosContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>                      {/* NUEVO: ahora envuelve todo */}
      <ProductosProvider>
        <FavoritosProvider>
          <App />
        </FavoritosProvider>
      </ProductosProvider>
    </AuthProvider>
  </React.StrictMode>
);
