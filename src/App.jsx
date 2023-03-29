
import './App.css';
import Banner from './componentes/Banner/Banner';
import Navbar from './componentes/Navbar/Navbar';
import BannerNvidia from './componentes/BannerNvidia/BannerNvidia';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Navbar/>
      <BannerNvidia/>
      <ItemListContainer greeting="Este es el greeting"/>
     
    </div>
  );
}

export default App;
