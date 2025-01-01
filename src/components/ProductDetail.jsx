import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import './style.css'; // Include the external CSS for styling

const ProductDetail = () => {
  const { id } = useParams(); // Extract the product ID from the URL
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null); // Store product data
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  // Fetch product data when the component mounts or when the id changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error('Product not found'); // Handle errors if the product isn't found
        const data = await response.json();
        setProduct(data); // Set the product data
      } catch (err) {
        setError(err.message); // Set error if fetching fails
      } finally {
        setLoading(false); // Set loading to false once the request completes
      }
    };

    fetchProduct(); // Call the async function
  }, [id]); // Re-run the effect if the product ID changes

  // Render loading state
  if (loading) return <div className="loading">Loading...</div>;

  // Render error state if product data can't be fetched
  if (error) return <div className="error">Error: {error}</div>;

  // Render not found if product data is not available
  if (!product) return <div className="not-found">Product not found</div>;

  // Render product details when data is available
  return (
    <div className="product-detail">
      <div className="product-detail-content">
        {/* Display the product image */}
        <img src={product.thumbnail} alt={product.title} className="product-detail-img" />
        <div className="product-detail-info">
          {/* Display product title, description, and price */}
          <h2>{product.title}</h2>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          {/* Button to add the product to the cart */}
          <button className="add-to-cart" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
