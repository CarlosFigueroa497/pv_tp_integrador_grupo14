import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FavoritosProvider } from './context/FavoritosContext.jsx';
import { ProductosProvider } from './context/ProductosContext.jsx'; // agregue esto en la rama fix/crear-producto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductosProvider>
      <FavoritosProvider>
        <App />
      </FavoritosProvider>
    </ProductosProvider>
  </React.StrictMode>
);
