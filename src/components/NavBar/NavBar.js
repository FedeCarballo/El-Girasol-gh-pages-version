import React from 'react';
import './NavBar.css'
import search from '../../assets/images/search.png'
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
export default function NavBar(){
 return(
  <header className="header">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <img src={logo} className="NavBar__logo"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
           <Link to="/"> <a className="nav-link active" aria-current="page">Inicio</a> </Link>
           <Link to="/Tienda"> <a className="nav-link ">Tienda</a> </Link>
           <Link to="/AboutUs"> <a className="nav-link">Quienes somos</a> </Link>
           <Link to="/Contact"> <a className="nav-link">Contacto</a> </Link>
          </div>
        </div> 
        <div className="CartWidget">     
        <CartWidget />
      </div>
      </div>
    </nav>       
</header>
 )   
}