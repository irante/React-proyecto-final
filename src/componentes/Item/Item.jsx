import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


//recibo el objeto iterado como props
const Item = ({detalles}) => {

 //desestructura el elemento(objeto) enviado como props desde ItemList
 
  const{nombre,Descripcion,precio,img,id}=detalles

  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} className='imagen' />
        <h3>{nombre}</h3>
        <p>{Descripcion}</p>
        <p>$ {precio}</p>
        <p>Id: {id}</p>
        <Link to={`/item/${id}`}> Ver Detalles </Link>
    </div>
  )
}

export default Item







