import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        padding: '20px',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '48px',
          color: '#e74c3c',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        404 - Page Not Found
      </h2>
      <p
        style={{
          fontSize: '18px',
          color: '#7f8c8d',
          marginBottom: '30px',
          maxWidth: '500px',
          lineHeight: '1.5',
        }}
      >
        The page you're looking for doesn't exist. It might have been moved, or
        the link might be broken. Try going back to the homepage.
      </p>
      <Link
        to="/"
        style={{
          padding: '12px 30px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#2c2c2c',
          textDecoration: 'none',
          borderRadius: '5px',
          boxShadow: '0 4px 6p xhsl(0, 0.00%, 42.40%)',
          transition: 'background-color 0.3s ease, transform 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#6c6c6c')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#2c2c2c')}
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
