import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook-fot.svg'
import instagram from '../../assets/images/instagram-fot.svg'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
    <div class="footer__container">
        <img class="logo__footer" src={logo}/>
        <ul class="footer__nav list-inline">
            <li class="list-inline-item"><Link to="/"> <a className="footer__item">Inicio</a></Link></li>
            <li class="list-inline-item"><Link to="/Tienda"> <a className="footer__item">Tienda</a> </Link></li>
            <li class="list-inline-item"><Link to="/AboutUs"> <a className="footer__item">Quienes somos</a> </Link></li>
            <li class="list-inline-item"><Link to="/Contact"> <a className="footer__item">Contacto</a> </Link></li>
        </ul>
        <div class="footer__social">
            <a href="https://www.instagram.com/productos.elgirasol/"><img class="icon__social"
                    src={instagram} alt="Icono de Instagram"/></a>
            <a href="https://www.facebook.com/productos.elgirasol"><img class="icon__social"
                    src={facebook} alt="Icono de facebook"/></a>
        </div>
    </div>
    )
}
