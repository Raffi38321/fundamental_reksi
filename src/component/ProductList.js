// component/ProductList.js
import React from 'react';
import Mobil from './product'; // Make sure this path is correct

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <div className='cards'>
        {products.map(product => (
          <Mobil 
            key={product.id} 
            nama_mobil={product.nama} 
            ling_poto={product.imageURL} 
            deskripsi_mobil={product.deskripsi} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;