import { useState, useMemo } from 'react'; 
import { useProductos } from '../context/ProductosContext';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters'; // Importo el nuevo componente de filtros

function Home() {
  const { productos } = useProductos(); // Todos los productos (API + nuevos)

  // 1. Estado para los filtros
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' para todas las categorías
  const [sortOrder, setSortOrder] = useState(''); // '' para sin ordenamiento, 'price-asc', 'price-desc'

  // 2. Lógica para el filtrado y ordenamiento
  const filteredAndSortedProducts = useMemo(() => {
    let currentProducts = [...productos]; // se crea una copia para no mutar el array original

    // se filtra por categoría
    if (selectedCategory !== 'all') {
      currentProducts = currentProducts.filter(
        (producto) => producto.category === selectedCategory
      );
    }

    // se Ordena por precio
    if (sortOrder === 'price-asc') {
      currentProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      currentProducts.sort((a, b) => b.price - a.price);
    }

    return currentProducts;
  }, [productos, selectedCategory, sortOrder]); 

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 home-product-list-title">Lista de productos</h2>

      {/* Adaptar el layout: filtros al lado en escritorio, arriba en celu */}
      <div className="row">
        {/* Columna para filtros  */}
        <div className="col-md-3 mb-4">
          <ProductFilters
            onCategoryChange={handleCategoryChange}
            onSortChange={handleSortChange}
            currentCategory={selectedCategory}
            currentSort={sortOrder}
          />
        </div>

        {/* Columna para la lista de productos */}
        <div className="col-md-9 product-list-section"> {/*  añadi la clase product-list-section  */}
          <div className="row">
            {filteredAndSortedProducts.map((producto) => (
              <div className="col-md-4 col-lg-4 mb-4" key={producto.id}>
                <ProductCard producto={producto} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

