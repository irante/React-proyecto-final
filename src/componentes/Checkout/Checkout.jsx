import { useState, useEffect, useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { db } from '../../services/firebase/config'
import { collection, addDoc, updateDoc, doc, query, onSnapshot } from 'firebase/firestore'




const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [products, setProducts] = useState([])


   
    useEffect(() => {
        const q = query(collection(db, "Productos"))

        const modify = onSnapshot(q, function (querySnapshot) {
            const docs = []
            querySnapshot.forEach(function (doc) {
                docs.push({ id: doc.id, ...doc.data() })
            })
            setProducts(docs)
        })
        return () => {
            modify()
        }
    }, [])

    //Disminuir el stock

    const changeStock = (id, cantidad) => {
        const productRef = doc(db, "Productos", id)
        const product = products.find(prod => prod.id === id)
        if (product) {
            updateDoc(productRef, { stock: product.stock - cantidad })
                .then(() => console.log(`Se compro ${productRef}`))
                .catch((error) => console.error(error))

        }
    }
    
    
    



    const handleSubmit =  (event) => {
        event.preventDefault();

     
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }


        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

       
        const orden = {
            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        orden.items.map(prod => (changeStock(prod.id, prod.cantidad)))


        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.error("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, vuelva más tarde");
            })

//      Bajar stock al comprar      


  
            

          
            

           


    }

 
    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>

                {carrito.map((producto) => (
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre} ...... cantidad: {producto.cantidad}
                        </p>
                        <p>Precio $: {producto.item.precio} </p>
                        <hr />

                       



                    </div>
                ))
                }
                
                <strong>
                    <h2>
                        TOTAL: {carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0)}
                    </h2>
                </strong>
                
                <hr />
                <div>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <br/>
                <div>
                    <label htmlFor="">Apellido:</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <br />
                <div>
                    <label htmlFor="">Telefono:</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <br />
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <br />
                <div>
                    <label htmlFor="">Email Confirmación:</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                {error && <p> {error} </p>}

                <br />
                <button type='submit'>Finalizar Compra</button>
                
            </form>


            {
                ordenId && (
                    <strong>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
                )
            }

        </div>
    )
}

export default Checkout