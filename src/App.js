// App.js
import './App.css';
import ProductList from './component/ProductList';
import ProductCreate from './component/ProductCreate'
import { useEffect,useContext } from 'react';
import productContext from './context/products';


function App() {
  const {fetchData} = useContext(productContext)
  useEffect(()=>{
    fetchData()
  },[])

  
  return (
    <div className="app-container">
      <h1 className='app-title'>Belanja Mobil</h1>
      <ProductCreate />
      <ProductList /> {/* Changed prop name to plural */}
    </div>
  );
}

export default App;
//8:47