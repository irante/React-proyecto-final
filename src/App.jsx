
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Banner from './componentes/Banner/Banner';
import Navbar from './componentes/Navbar/Navbar';
import BannerNvidia from './componentes/BannerNvidia/BannerNvidia';
import {BrowserRouter, Routes, Route} from 'react-router-dom';







function App() {



  return (
    <div className="App">

      <BrowserRouter>
       <Banner />
       <Navbar />
       <BannerNvidia />   



        <Routes>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </BrowserRouter>

     <ItemListContainer/>     
     <ItemDetailContainer/> 




    </div>
  );
}

export default App;
