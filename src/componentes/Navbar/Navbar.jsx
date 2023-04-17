import React from 'react'
import './Navbar.css'
import Cartwidget from '../CartWidget/Carwidget'
import { NavLink, link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg colornav">
    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
          <li className="nav-item">
            <NavLink className="nav-link" to={`/`}>Inicio</NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link" to={`/categoria/1`}>Pc de Escritorio</NavLink>
          </li>
          
          <li className="nav-item">
           <NavLink className="nav-link" to={`/categoria/3`}>Notebooks</NavLink>
          </li>
          
          <li className="nav-item">
          <NavLink className="nav-link" to={`/categoria/2`}>Monitores</NavLink>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="">Contacto</a>
          </li> 
        
        </ul>
      </div>
      <Cartwidget/>
    </div>
  </nav>
  )
}

export default Navbar