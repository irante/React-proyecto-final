import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/firebase/config'

const ItemListContainer = () => {

  const [Products, setProducts] = useState([]);

  const {idCategoria} = useParams();

 useEffect(()=>{
   const misProductos = idCategoria ? query(collection(db,"Productos"),where("idCat", "==", idCategoria)):collection(db,"Productos");
  getDocs(misProductos)
    .then(res=>{
      const nuevosProductos = res.docs.map(doc => {
        const data = doc.data()
        return {id:doc.id, ...data}
      })
      setProducts(nuevosProductos);

    })

},[idCategoria])
  
 

  return (
    <div>
      <div className='decoracion'>
         <h2 className='titulo'>Cyber Week !</h2>
      </div>


      {/*llamar al componente y enviar mediante props el Array con productos*/}
      <ItemList products={Products}/>      
      
    </div>
  )
}

export default ItemListContainer