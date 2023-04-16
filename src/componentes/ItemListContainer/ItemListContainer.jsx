import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(respuesta => {
       setProducts(respuesta);       
    });
  }, []);

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