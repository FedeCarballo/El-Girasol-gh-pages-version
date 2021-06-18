import React from 'react'
import './Contact.css'
import facebook from '../../assets/images/facebook-fot.svg'
import instagram from '../../assets/images/instagram-fot.svg'
export default function Contact() {
    return (
        <div className="Contact__Container">
            <div className="Contact">
                <div className="Contact__Text">
                   <h1> 
                       medios de contacto
                   </h1>
                </div>
                <div className="Contact__Images">
                    <img src={facebook}/>
                    <p>www.facebook.com/productos.elgirasol</p>
                    <img src={instagram}/>
                    <p>www.instagram.com/productos.elgirasol</p>
                </div>
            </div>
        </div>
    )
}
