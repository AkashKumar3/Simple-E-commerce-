import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

const OrderPlaced = () => {
  // Get cart items from the Redux store
  const cartItems = useSelector(state => state.cart.items);
  
  // Calculate the total price of all items in the cart
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="order-placed">
      {/* Order Confirmation Header */}
      <h1>Thank you for your order!</h1>

      {/* Order summary */}
      <div className="order-summary">
        <h3>Your Order Summary</h3>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <div className="order-items">
            {cartItems.map(item => (
              <div key={item.id} className="order-item">
                <img src={item.thumbnail} alt={item.title} className="order-item-img" />
                <div className="order-item-info">
                  <h4>{item.title}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Display total price */}
      <div className="order-total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>

      {/* Thank You Message */}
      <div className="thank-you-message">
        <p>We have received your order. Thank you for shopping with us!</p>
      </div>

      {/* Buttons to navigate */}
      <div className="order-actions">
        <Link to="/" className="button">Continue Shopping</Link>
        <Link to="/cart" className="button">Go to Cart</Link>
      </div>
    </div>
  );
};

export default OrderPlaced;
