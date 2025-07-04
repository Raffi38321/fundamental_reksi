import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import productContext from '../context/products'

const ProductCreate = () => {
    const {onCreateProduct} = useContext(productContext)
    const inisialState = {
        nama:"",
        deskripsi:"",
        imgURL:""
    }
    const[showForm,setshowForm] = useState(false)
    const [formData,setFormData] = useState(inisialState)
    const handleShow=()=>{
        setshowForm(!showForm)

    }

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        onCreateProduct(formData)
        setFormData(inisialState)
    }
  return (
    <div className='product-create'>
        <div className='toggle-add'>
            <button className='edit-input-submit add-toggle' onClick={handleShow}>
                {showForm? "cancel":"add"}
            </button>
        </div>
        {showForm && <form className='form' onSubmit={handleSubmit}>
            <div className='form-add-title'>
                Add Product 
            </div>
            <div className='form-group'>
                <input type='text'  className="add-input-text" placeholder='namanya' name='nama' value={formData.nama} onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <input type='text' className="add-input-text" placeholder='deskripsi' name='deskripsi' value={formData.deskripsi} onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <input type='text'  className="add-input-text" placeholder='link gambar' name='imgURL' value={formData.imgURL} onChange={handleChange}/>
            </div>
            <input type='submit' className='edit-input-submit add'></input>
        </form>}
    </div>
  )
}

export default ProductCreate
