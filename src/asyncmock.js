//Array de Productos

class Producto {
    constructor (nombre,Descripcion,precio,img,id,idCat,stock){
        this.nombre = nombre;
        this.Descripcion = Descripcion;
        this.precio = precio;
        this.img = img;
        this.id = id;
        this.idCat = idCat;
        this.stock = stock
       
    }
}

const producto1 = new Producto("PC Bangho Gm220t", "16 gb de ram - ssd 500gb",74999,"../img/gm220t.jpg","1","1",7);
const producto2 = new Producto("PC Bangho Cambridge A220", " 16 gb de ram - ssd 250gb",125999,"../img/cambrige.jpg","2","1",3);
const producto3 = new Producto("Monitor Gigabyte G24f", " 1080p 144hz", 84999,"../img/g24f.png","3","2",5);
const producto4 = new Producto("Notebook Acer Nitro", "8Gb Ram - Core I5", 224999,"../img/nitro5.jpg","4","3",2);


const products = [producto1,producto2,producto3,producto4];



export const getProducts = () =>{
    return new Promise ((resolve)=>{
        setTimeout (()=>{
            resolve(products);
        },100)
    })
}


export const getUnProducto = (id) =>{
    return new Promise ((resolve)=>{
        setTimeout (()=>{
            const producto = products.find(elemento => elemento.id === id);
            resolve(producto);
            
        },100)
    })
}






//find devuelve el primer elemento que cumpla con la condicion, como es un Array de objetos devuelve un objeto

export const getProductosPorCategoria = (idCategoria) =>{
    return new Promise ((resolve)=>{
        setTimeout (()=>{
            const productosCategoria = products.filter(elemento => elemento.idCat === idCategoria)
            resolve(productosCategoria);
            
        },100)
    })
}