// App.js
import './App.css';
import ProductList from './component/ProductList';
import { useState } from 'react';
import Products from './product/Product';
import ProductCreate from './component/ProductCreate'

function App() {
  const [products, setProducts] = useState(Products); // Changed variable name to plural for clarity
  
  return (
    <div className="app-container">
      <h1 className='app-title'>Belanja Mobil</h1>
      <ProductCreate/>
      <ProductList products={products} /> {/* Changed prop name to plural */}
    </div>
  );
}

export default App;
//3:43