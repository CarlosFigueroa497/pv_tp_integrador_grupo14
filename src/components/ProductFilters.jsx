import React from 'react';

function ProductFilters({ onCategoryChange, onSortChange, currentCategory, currentSort }) {
  const categories = [
    "all", // Opción para mostrar todas las categorías
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  return (
    <div className="product-filters p-3 bg-light rounded shadow-sm mb-3 mb-md-0">
      {/* Filtro por Categora */}
      <div className="mb-4">
        <h6>Categoría</h6>
        <select
          className="form-select" // Clase de Bootstrap para estilos de select
          value={currentCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="all">Todas las Categorías</option> {/* Opcion para mostrar todas */}
          {categories
            .filter(cat => cat !== "all") 
            .map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}
              </option>
            ))}
        </select>
      </div>

      {/* Ordenar por Precio */}
      <div>
        <h6>Ordenar por Precio</h6>
        <select
          className="form-select"
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="">Seleccionar Orden</option>
          <option value="price-asc">Precio: Menor a Mayor</option>
          <option value="price-desc">Precio: Mayor a Menor</option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilters;