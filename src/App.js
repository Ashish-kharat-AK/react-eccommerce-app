import React from 'react';
import './style.css';
import Products from './components/Products';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
    </div>
  );
}
