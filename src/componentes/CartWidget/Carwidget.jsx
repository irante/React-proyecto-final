import React from 'react'
import './Carwidget.css'
import imgCarrito from './imgCarrito.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

const Cartwidget = () => {
  const { carrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
  return (

    <Link to='/cart'>

      <div className='HoverCard'>
        <img className='ImagenCarrito' src={imgCarrito} alt="" />

        <h5 className='CantUnidades'>{totalCantidad}</h5>
      </div>

    </Link>

  )
}

export default Cartwidget

