import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'




//recibo un objeto como prop
const ItemDetail = ({detalles}) => {


 //desestructuro el objeto en variables
const{nombre,Descripcion,precio,img,id,idCat,stock}=detalles

const [agregarCantidad, setAgregarCantidad] = useState(0);

const {agregarProducto} = useContext(CarritoContext);


const manejadorCantidad = (cantidad) => {
  setAgregarCantidad(cantidad);

  const item = {id, nombre, precio};
  agregarProducto(item, cantidad);
}



return (
    <div className='contenedorItem'>
        <h2>{nombre}</h2>
        <h3>$ {precio}</h3>
      
        <p>{Descripcion}</p>
        <img src={img} className='imagenDetalle' alt={"nombre"}  />

        {
          agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : <ItemCount inicial={1} stock={stock}
           funcionAgregar={manejadorCantidad}/>
        }
        
    </div>
  )
}

export default ItemDetail

