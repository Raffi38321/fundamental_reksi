import React from 'react'
import Mobil from './product';
import { Products } from '../product/product';

const ProductList = () => {
    return (
        <div>
            <div className='cards'>
                {/* First method - manual listing */}
                <Mobil
                    key="ford"
                    nama_mobil='Ford'
                    ling_poto='https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
                    deskripsi_mobil='Mobil yang sangat kuat'
                />
                <Mobil
                    key="mustang"
                    nama_mobil='Mustang'
                    ling_poto='https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMzE1OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
                    deskripsi_mobil='Mobil Mustang mempunyai desain yang elegan'
                />
                <Mobil
                    key="toyota"
                    nama_mobil='Toyota'
                    ling_poto='https://images.unsplash.com/photo-1559416523-140ddc3d238c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0MjIxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
                    deskripsi_mobil='Mobil toyota memiliki interior dan body yang kokoh'
                />
                <Mobil
                    key="lamborghini"
                    nama_mobil='Lamborghini'
                    ling_poto='https://images.unsplash.com/photo-1621135802920-133df287f89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjA0MjYyNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
                    deskripsi_mobil='Mobil Lamborghini memiliki interior dan body yang kokoh'
                />

                {/* Second method - mapping from array */}
                {Products.map(product => {
                    return <Mobil 
                        key={product.id} 
                        nama_mobil={product.nama} 
                        ling_poto={product.imageURL} 
                        deskripsi_mobil={product.deskripsi} 
                    />

                })}
                
                
            </div>
        </div>
    )
}

export default ProductList;