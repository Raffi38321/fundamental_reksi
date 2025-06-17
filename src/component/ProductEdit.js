import React from 'react'
import { useState } from 'react'

const ProductEdit = ({product,onEditProduct,cancelEdit}) => {
    const initialState = {
        nama :product.nama,
        deskripsi:product.deskripsi,
        imageURL: product.imageURL
    }
    
    const [submitEdit,setSubmitEdit] = useState(initialState);
    const {nama,deskripsi,imageURL} = submitEdit

    const handleChange= (e)=>{
        setSubmitEdit({...submitEdit,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        onEditProduct(product.id, submitEdit)
    }

    const handleCancel=(e)=>{
        e.preventDefault()
        cancelEdit()
    }

  return (
    <div className='product-edit'>
      <div className='edit-title'>edit product</div>
      <form>
        <div className='form-group'>
            <input type='text' name='nama' value={nama} onChange={handleChange} className='edit-input-text' placeholder='Nama Product'/>
        </div>
        <div className='form-group'>
            <input type='text' name='deskripsi' value={deskripsi} onChange={handleChange} className='edit-input-text' placeholder='Deskripsi Product'/>
        </div>
        <div className='form-group'>
            <input type='text' name='imageURL' value={imageURL} onChange={handleChange} className='edit-input-text' placeholder='Image URL'/>
        </div>
        <input type='submit' onClick={handleSubmit} className='edit-input-submit save' value='Save'/>
        <button className='edit-input-submit cancel' onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default ProductEdit
