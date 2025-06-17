// App.js
import './App.css';
import ProductList from './component/ProductList';
import { useState } from 'react';
import Products from './product/Product';
import ProductCreate from './component/ProductCreate'

function App() {
  const [products, setProducts] = useState(Products); // Changed variable name to plural for clarity

  const onEditProduct = (id,data)=>{
    const updatedProduct = products.map((prod)=>{
      if(id===prod.id){
        return {...prod,...data}
      }
      return prod
    })
    setProducts(updatedProduct)
  }
  const onCreateProduct = (product)=>{
    setProducts([...products,{id:Math.round(Math.random()*7777),...product}])
  }
  const onDeleteProduct = (id) => {
    setProducts(prevProducts => prevProducts.filter(prod => prod.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className='app-title'>Belanja Mobil</h1>
      <ProductCreate onCreateProduct = {onCreateProduct}/>
      <ProductList products={products} onDeleteProduct={onDeleteProduct} onEditProduct={onEditProduct}/> {/* Changed prop name to plural */}
    </div>
  );
}

export default App;
//4:54