import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./style.css"

const Header = () => {
  // Get the items in the cart from the Redux store
  const cartItems = useSelector(state => state.cart.items);
  
  // Calculate the total number of items in the cart by summing the quantity of each item
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <nav className="nav">
        {/* Link to the home page with the company logo */}
        <Link to="/" className="logo">
          ShoppyGlobe
        </Link>
        <div className="nav-links">
          {/* Link to the home page */}
          <Link to="/" className="nav-link">
            Home
          </Link>
          {/* Link to the cart page with the cart icon and number of items */}
          <Link to="/cart" className="cart-icon">
            <span className="cart-text">
              Cart ({totalItems}) {/* Display the total number of items in the cart */}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
