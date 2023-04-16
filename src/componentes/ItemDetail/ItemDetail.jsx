import React from 'react'
import './ItemDetail.css'



//recibo un objeto como prop
const ItemDetail = ({detalles}) => {
 
 //desestructuro el objeto en variables
const{nombre,Descripcion,precio,img,id}=detalles
 
  return (
    <div className='contenedorItem'>
        <h2>{nombre}</h2>
        <h3>$ {precio}</h3>
      
        <p>{Descripcion}</p>
        <img src={img} className='imagenDetalle' alt={nombre}  />
    </div>
  )
}

export default ItemDetail