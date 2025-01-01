import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import './style.css'; 

const CartItem = ({ item }) => {
  // Initialize the Redux dispatch function
  const dispatch = useDispatch();

  // Handle the change in quantity for an item in the cart
  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    // Only update quantity if it's a positive value
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  return (
    <div className="cart-item">
      {/* Render the thumbnail image for the cart item */}
      <img src={item.thumbnail} alt={item.title} className="cart-item-img" />
      <div className="cart-item-info">
        {/* Render the title of the item */}
        <h3>{item.title}</h3>
        {/* Render the price of the item */}
        <p className="cart-item-price">${item.price}</p>
        <div className="cart-item-quantity">
          {/* Input for changing the quantity of the item */}
          <input
            type="number"
            min="1" // Prevent the quantity from being less than 1
            value={item.quantity}
            onChange={handleQuantityChange} // Trigger quantity change handler
            className="quantity-input"
          />
        </div>
        {/* Button to remove the item from the cart */}
        <button
          className="remove-button"
          onClick={() => dispatch(removeFromCart(item.id))} // Dispatch remove action on click
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
