import React from 'react'
import './Item.css'


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
        <button className='btnProducto'>Ver Detalles</button>
    </div>
  )
}

export default Item







