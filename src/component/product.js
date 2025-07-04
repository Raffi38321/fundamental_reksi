import React from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import ProductEdit from "./ProductEdit";
import { useContext } from "react";
import productContext from '../context/products';

const Mobil = ({product}) => {
  const [counter, setCounter] = useState(0);
  const {id,nama,deskripsi,imageURL} = product;
  const [showEdit,setShowEdit] = useState(false);
  const {onDeleteProduct} = useContext(productContext)
  const {onEditProduct} = useContext(productContext)
  const hitung = () => {
    setCounter(counter + 1);
  }
  const kurang = () =>{
    setCounter(counter - 1);
  }
  let info;
  if (counter === 0) {
    info = <div className="keranjang show-keranjang" onClick={hitung}>add </div>       
  }
  else{
    info= <div className="keranjang"><button onClick={hitung} className="button"> [+] </button>
          <span>{counter}</span>
          <button onClick={kurang} className="button"> [-] </button></div>
  }

  const handleDelete = () => {
    onDeleteProduct(id); // Tidak dipanggil saat render!
  };

  const handleShow = () =>{
    setShowEdit(!showEdit)
  }

  const handleSubmit= (id,data)=>{
    setShowEdit(!showEdit)
    onEditProduct(id,data)
  }

  const cancelEdit=()=>{
    setShowEdit(!showEdit)
  }
  return (
    <div className='card'>
      {showEdit? <ProductEdit product={product} onEditProduct={handleSubmit} cancelEdit={cancelEdit}/> :(<><div className="edit-delete">
        <MdDelete className="icon-edit" onClick={handleDelete}/>
        <CiEdit className="icon-delete" onClick={handleShow}/>
      </div>
      <img style={{
        width: "100%",
        height: "200px",
        borderRadius: '10px 10px 0px 0px' 
      }} src={imageURL}  alt="car"/>
      <div className='container'>
        <h4>
          <b>{nama}</b>
        </h4>
        <p>
          {deskripsi}
        </p>
      </div>
      <div className="card-keranjang">
        {info}
      </div></>)}
      
    </div>
  );
};

export default Mobil;

//2:26