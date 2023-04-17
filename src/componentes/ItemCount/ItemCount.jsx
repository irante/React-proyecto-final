import React from 'react'
import './ItemCount.css'
import { useState } from 'react'







const ItemCount = ({inicial,stock,funcionAgregar}) => {

    const [contador, setContador] = useState(inicial);

    const incrementar =()=>{
        if(contador < stock) {
            setContador(contador+1);
        }
    }

    const decrementar =()=>{
        if(contador > inicial) {
            setContador(contador-1);
        }
    }


  return (
    <div>
        <div>
            <button onClick={decrementar}>-</button>
            <p>{contador}</p>
            <button onClick={incrementar}>+</button>
        </div>
        <button>Agregar al Carrito</button>

        {/*La funcionalidad de agregar al carrito estara habilitada al agregar los eventos*/}
        {/*<button onClick={()=>funcionAgregar(contador)}>Agregar al Carrito</button>*/}

    </div>
  )
}

export default ItemCount