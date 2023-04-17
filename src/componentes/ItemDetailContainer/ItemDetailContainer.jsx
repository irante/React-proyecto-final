import React from 'react';
import { getUnProducto } from '../../asyncmock';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState("");


  const {idItem} = useParams();

  console.log (idItem) 
   
   //obtengo un objeto como respuesta y la asigno a la variable de estado producto
   
   useEffect(() => {
        getUnProducto(idItem)
          .then(respuesta => {
           setProducto(respuesta);       
        });
      }, [idItem]);

      




     
  //envio a ItemDetail como props el objeto de producto seleccionado 

  return (
    <div>
      <ItemDetail detalles={producto}/>
      
    </div>
  )
}

export default ItemDetailContainer



