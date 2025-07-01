// App.js
import './App.css';
import ProductList from './component/ProductList';
import { useState } from 'react';
import ProductCreate from './component/ProductCreate'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]); // Changed variable name to plural for clarity
  const fetchData = async ()=>{
    const response = await axios.get('http://127.0.0.1:3001/products')
    setProducts(response.data)
  }
  
  useEffect(()=>{
    fetchData()
  },[])

  const onEditProduct = async (id,data)=>{
    const response = await axios.put(`http://127.0.0.1:3001/products/${id}`,data)
    const updatedProduct = products.map((prod)=>{
      if(id===prod.id){
        return {...prod,...response.data}
      }
      return prod
    })
    setProducts(updatedProduct)
  }
  const onCreateProduct = async (product)=>{
    const response = await axios.post('http://127.0.0.1:3001/products',product)
    setProducts([...products,response.data])
  }
  const onDeleteProduct = async (id) => {
    await axios.delete(`http://127.0.0.1:3001/products/${id}`)
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