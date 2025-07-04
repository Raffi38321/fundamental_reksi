
import { createContext,useState} from "react";
import { getProductApp,editProductApp,createProductApp,deleteProductApp} from '../api/ProductAPI.js';

const productContext = createContext()

function Provider({children}){
    const [products, setProducts] = useState([]); // Changed variable name to plural for clarity
    const fetchData = async ()=>{
        const response = await getProductApp()
        setProducts(response)
    }
    const onEditProduct = async (id,data)=>{
        const response = await editProductApp(id,data)
        const updatedProduct = products.map((prod)=>{
          if(id===prod.id){
            return {...prod,...response}
          }
          return prod
        })
        setProducts(updatedProduct)
      }
      const onCreateProduct = async (product)=>{
        const response = await createProductApp(product)
        setProducts([...products,response])
      }
      const onDeleteProduct = async (id) => {
        await deleteProductApp(id)
        setProducts(prevProducts => prevProducts.filter(prod => prod.id !== id));
        
      };
      const valueToShare = {
        products,
        onEditProduct,
        fetchData,
        onCreateProduct,
        onDeleteProduct
      }

      return (
        <productContext.Provider value={valueToShare}>
            {children}
        </productContext.Provider>
      )
}

export {Provider}
export default productContext