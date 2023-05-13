import React from 'react';

import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { db } from '../../services/firebase/config';
import { getDoc, doc } from 'firebase/firestore';



const ItemDetailContainer = () => {

  const [producto, setProducto] = useState("");


  const {idItem} = useParams();

 
   
   //obtengo un objeto como respuesta y la asigno a la variable de estado producto
   
  useEffect(()=>{
    const nuevoDoc = doc(db, "Productos", idItem)

    getDoc(nuevoDoc)
      .then(res=>{
        const data = res.data();
        const nuevoProducto = {id:res.id, ...data}
        setProducto(nuevoProducto);
      })
  })

      
     
  //envio a ItemDetail como props el objeto de producto seleccionado 

  return (
    <div>
      <ItemDetail detalles={producto}/>
      
    </div>
  )
}

export default ItemDetailContainer



