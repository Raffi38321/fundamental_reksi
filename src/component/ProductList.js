// component/ProductList.js
import React from 'react';
import Mobil from './product'; // Make sure this path is correct
import { useContext } from 'react';
import productContext from '../context/products';

const ProductList = () => {
  const {products} = useContext(productContext)
  return (
    <div className="product-list">
      <div className='cards'>
        {products.map(product => (
          <Mobil 
            key={product.id} 
            product = {product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;