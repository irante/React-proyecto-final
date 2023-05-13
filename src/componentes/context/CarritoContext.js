import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });


export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    console.log(carrito);

    //funcion que agrega producto al carrito

    const agregarProducto = (item, cantidad) => {
        if(!YaEstaEnCarrito(item.id)){
            setCarrito(prev =>[...prev,{item, cantidad}]);

        }else {
            console.log("producto ya agregado");
        }

    }

    //Eliminar productos del carrito

    const EliminarProducto = (id) =>{
        const carritoActualizado = carrito.filter(prod => prod.id !== id)
        setCarrito(carritoActualizado);

    }



    //vaciar carrito 

    const vaciarCarrito = () =>{
        setCarrito([]);
    }






    const YaEstaEnCarrito = (id) =>{
        return carrito.some(prod => prod.id === id);


    }

    return (
        <CarritoContext.Provider value= {{carrito, agregarProducto, EliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )


}