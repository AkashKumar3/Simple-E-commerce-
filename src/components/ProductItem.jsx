import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';
import './style.css'; 

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch action to add the product to the cart
  };

  return (
    <div className="product-item">
      {/* Display the product image */}
      <img src={product.thumbnail} alt={product.title} />
      {/* Display the product title */}
      <h3>{product.title}</h3>
      {/* Display the product price */}
      <p>${product.price}</p>
      <div className="product-actions">
        {/* Link to the product details page */}
        <Link to={`/product/${product.id}`}>View Details</Link>
        {/* Button to add the product to the cart */}
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
