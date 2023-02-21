import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header';
import Checkout from './pages/checkout';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
