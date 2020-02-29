import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "video-react/dist/video-react.css"; 
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Principal from './components/Principal';
import Perfil from './components/Perfil'
import Inicio from './components/Inicio'
import Navigation from './components/Navigation';
import Marketplace from './components/Marketplace';
import Producto from './components/MarketplaceProducto'
import Eventos from './components/Eventos';
function App() {

  return (
    <Router>
      <Navigation/>
      <Route path ="/" exact component={Principal}/>      
      <Route path ="/inicio" component={Inicio}/>
      <Route path ="/perfil" component={Perfil}/>      
      <Route path ="/marketplace" component={Marketplace}/>      
      <Route path ="/producto" component={Producto}/>        
      <Route path ="/eventos" component={Eventos}/>
    </Router>
  );
}

export default App;
