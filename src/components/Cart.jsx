import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './cartItem';
import './style.css';
import { useNavigate } from 'react-router-dom';



const Cart = () => {

  const navigate = useNavigate(); // Initialize useNavigate

// Function to handle checkout and redirect to the Order Placed page
const handleCheckout = () => {
  navigate('/order-placed'); // Navigate to the order placed page
};

  // Get the items from the Redux store's cart state
  const cartItems = useSelector(state => state.cart.items);

  // Calculate the total price of all items in the cart
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // If the cart is empty, display a message to the user
  if (cartItems.length === 0) {
    return <div className="cart-empty">Your cart is empty</div>;
  }

  return (
    <div className="cart">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-items">
        {/* Map over the cart items and render a CartItem component for each one */}
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-total">
        {/* Display the total price, formatted to 2 decimal places */}
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-button" onClick={handleCheckout}>Placed Order</button>
      </div>
    </div>
  );
};

export default Cart;
