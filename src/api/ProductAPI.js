import axios from "axios";

export const getProductApp = async()=>{
    const response = await axios.get("http://127.0.0.1:3001/products")
    return response.data
}

export const editProductApp = async (id,data)=>{
    const response = await axios.put(`http://127.0.0.1:3001/products/${id}`,data)
    return response.data
}

export const createProductApp = async (product)=>{
    const response = await axios.post("http://127.0.0.1:3001/products",product)
    return response.data
}

export const deleteProductApp = async (id)=>{
    await axios.delete(`http://127.0.0.1:3001/products/${id}`)
}