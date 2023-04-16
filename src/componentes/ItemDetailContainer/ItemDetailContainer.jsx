import React from 'react'
import { getUnProducto } from '../../asyncmock'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState("");

   
   //obtengo un objeto como respuesta y la asigno a la variable de estado producto
   
    useEffect(() => {
        getUnProducto(4)
          .then(respuesta => {
           setProducto(respuesta);       
        });
      }, []);

     
  //envio a ItemDetail como props el objeto de producto seleccionado con el Id    

  return (
    <div>
        <ItemDetail detalles={producto}/>
    </div>
  )
}

export default ItemDetailContainer



