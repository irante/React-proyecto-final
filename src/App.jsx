
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Banner from './componentes/Banner/Banner';
import Navbar from './componentes/Navbar/Navbar';
import BannerNvidia from './componentes/BannerNvidia/BannerNvidia';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CarritoProvider } from './componentes/context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';





function App() {



  return (
    <div className="App">

      <BrowserRouter>
      <CarritoProvider>
       <Banner />
       <Navbar />
       <BannerNvidia />   



        <Routes>
          {/*home*/}
          <Route path="/" element={<ItemListContainer/>}/>

          {/*cards de productos*/}
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>

           {/*Detalle de productos*/}
           <Route path="/item/:idItem" element={ <ItemDetailContainer/> }  />

           <Route path="/cart" element={<Cart/>} />

           <Route path="/checkout" element={<Checkout/>}   />
           
           <Route path="*" element={<h2>Sitio en Construccion</h2> }  />
          
        </Routes>
      </CarritoProvider>
      </BrowserRouter>
      

       
      




    </div>
  );
}

export default App;
