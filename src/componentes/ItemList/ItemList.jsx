//Agrupador de componentes item

import Item from '../Item/Item'
import React from 'react'
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <div className='contenedorProductos'>

      
        <br />

           {/*Por cada elemento del array renderiza un componente item pasandole mediante props el elemento (objeto) iterado,
            de modo que van a haber tantos componentes item como elementos del array. */}
         {products.map((elemento)=><Item key={elemento.id} detalles={elemento}/>)} 

    </div>
  )
}

export default ItemList