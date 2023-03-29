import React from 'react'
import './Navbar.css'
import Cartwidget from '../CartWidget/Carwidget'

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
            <a className="nav-link" aria-current="page" href="./index.html">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./pcs.html">Pc de Escitorio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./notebooks.html">Notebooks</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./contacto.html">Contacto</a>
          </li> 
        </ul>
      </div>
      <Cartwidget/>
    </div>
  </nav>
  )
}

export default Navbar