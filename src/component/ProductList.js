// component/ProductList.js
import React from 'react';
import Mobil from './product'; // Make sure this path is correct

const ProductList = ({ products,onDeleteProduct,onEditProduct }) => {
  return (
    <div className="product-list">
      <div className='cards'>
        {products.map(product => (
          <Mobil 
            key={product.id} 
            product = {product}
            onDeleteProduct = {onDeleteProduct}
            onEditProduct = {onEditProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;