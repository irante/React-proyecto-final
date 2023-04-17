import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductosPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

  const [Products, setProducts] = useState([]);

  const {idCategoria} = useParams();

 const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;
  
  useEffect(() => {

    

    funcionProductos(idCategoria)
      .then(respuesta => {
       setProducts(respuesta);       
    });
  }, [idCategoria]);

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