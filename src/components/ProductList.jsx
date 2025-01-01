import React, { useState } from 'react';
import ProductItem from './ProductItem';
import './style.css';
import { useProducts } from '../utils/useProducts'; // Custom hook to fetch products


const ProductList = () => {
  const { products, loading, error } = useProducts(); // Get products data, loading state, and error state from the custom hook
  const [searchTerm, setSearchTerm] = useState(''); // State for storing the search input

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>; // Display loading state
  if (error) return <div>Error: {error}</div>; // Display error state

  // Select the "hero" product (in this case, the 10th product in the list)
  const heroProduct = products[9];


  return (
    <div className="product-list">
      {/* Render hero product if available */}
      {heroProduct && (
        <div className="hero-product">
          <div className="hero-product-content">
            <img src={heroProduct.thumbnail} alt={heroProduct.title} />
            <div className="hero-product-info">
              <h2>{heroProduct.title}</h2>
              <p>${heroProduct.price}</p>
            </div>
          </div>
        </div>
      )}

      {/* Search bar to filter products */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term as user types
        />
      </div>

      {/* Render filtered list of products */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} /> // Render each product item
        ))}
      </div>
    </div>
  );
};

export default ProductList;
