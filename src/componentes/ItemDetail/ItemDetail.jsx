import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'



//recibo un objeto como prop
const ItemDetail = ({detalles}) => {


 //desestructuro el objeto en variables
const{nombre,Descripcion,precio,img,id,idCat,stock}=detalles

const [agregarcantidad, setAgregarCantidad] = useState(0);



return (
    <div className='contenedorItem'>
        <h2>{nombre}</h2>
        <h3>$ {precio}</h3>
      
        <p>{Descripcion}</p>
        <img src={img} className='imagenDetalle' alt={"nombre"}  />
        <ItemCount/>
    </div>
  )
}

export default ItemDetail

