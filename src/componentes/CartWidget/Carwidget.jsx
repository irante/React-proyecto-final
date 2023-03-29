import React from 'react'
import imgCarrito from './imgCarrito.png'

const Cartwidget = () => {
  return (
   <div className='HoverCard'>
         <img className='ImagenCarrito' src={imgCarrito} alt="" />
         <h5 className='CantUnidades'>5</h5>
  </div>
    )
}

export default Cartwidget