# pv_tp_integrador_grupo14
TP Integrador 2025

ALUMNOS:
•Figueroa Carlos Augusto
•Briones Juan Nicolás
•Tapia Moraña Hernan 

GRUPO 14 

El presente Trabajo Práctico Integrador tiene como finalidad la aplicación y consolidación de los conocimientos adquiridos durante la cursada de Programación Visual. A lo largo de este proyecto, se abordará el desarrollo progresivo de una aplicación web funcional, utilizando React, Vite, JavaScript, React Router DOM, y todos los temas vistos en la materia.

Este proyecto es una simulación de una tienda online desarrollada con React + Vite, donde los usuarios pueden:

• Registrarse e iniciar sesión
• Acceder a rutas protegidas
• Ver productos desde una API externa (FakeStore API)
• Crear nuevos productos personalizados
• Editar o eliminar productos propios
• Marcar productos como favoritos
• Filtrar y ordenar productos
• Disfrutar de una interfaz adaptable (responsivo)

Estructura del proyecto:
src/
├── components/ # Componentes reutilizables (Header, Footer, ProductCard, PrivateRoute, ProductFilters, etc)
├── context/ # Contextos globales para Auth, Productos y Favoritos
├── pages/ # Vistas principales: Login, Registro, Home, etc.
├── App.jsx # Define rutas y estructura general
├── main.jsx # Punto de entrada (render de <App >)

Tecnologías utilizadas:
- React
- Vite
- React Context API (estado global)
- Rutas protegidas con `PrivateRoute`
- LocalStorage para sesiones y datos
- FakeStoreAPI para datos de productos reales
- Bootstrap para estilo responsivo
- React Toastify para notificaciones modernas

Funcionalidades principales:
- Autenticación simulada (registro/login con localStorage)
- Manejo de sesión activa
- Rutas protegidas: sólo usuarios logueados pueden acceder al contenido
- Consumo de API externa para productos reales
- Favoritos con íconos y persistencia en localStorage
- Filtros y ordenamientos por categoría y precio
- Diseño responsive (adaptado a celular y escritorio)

Autenticación:
- Registro e inicio de sesión están disponibles en `/registro` y `/login`.
- Se almacenan usuarios en localStorage.
- La sesión activa se guarda y mantiene hasta cerrar sesión.