import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import HomePage from './Components/HomePage';
import ProductDetailsPage from './Components/ProductDetailsPage';
import CartPage from './Components/CartPage';
import CartProvider from './Components/CartContext';


const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </Router>
    
  </CartProvider>
);

export default App;
