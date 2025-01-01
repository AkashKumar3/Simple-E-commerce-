import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store'; // Importing the Redux store
import Header from './components/Header'; // Importing the Header component
import OrderPlaced from './components/OrderPlaced';

// Lazily loading the components for better performance
const ProductList = React.lazy(() => import('./components/ProductList'));
const ProductDetail = React.lazy(() => import('./components/ProductDetail'));
const Cart = React.lazy(() => import('./components/Cart'));
const NotFound = React.lazy(() => import('./components/NotFound'));

function App() {
  return (
    <Provider store={store}> {/* Provide the Redux store to the app */}
      <Router> {/* Set up routing with React Router */}
        <Header /> {/* Header component */}
        
        <main>
          {/* Suspense is used to show a fallback (loading) state while the components are being lazily loaded */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<ProductList />} /> {/* Product list page */}
              <Route path="/product/:id" element={<ProductDetail />} /> {/* Product detail page */}
              <Route path="/cart" element={<Cart />} /> {/* Shopping cart page */}
              <Route path="/order-placed" element={<OrderPlaced />} /> {/* Order placed page */}
              <Route path="*" element={<NotFound />} /> {/* Fallback for any unknown routes */}
            </Routes>
          </Suspense>
        </main>

      </Router>
    </Provider>
  );
}

export default App;
