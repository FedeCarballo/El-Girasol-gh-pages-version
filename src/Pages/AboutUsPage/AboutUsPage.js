import React from 'react'
import './AboutUs.css'
import Image from '../../assets/images/AboutUs.jpg'
export default function AboutUsPage() {
    return (
        <div className="AboutUs__Container">
            <div className="About__Detail">
                <div className="About__image">
                    <img  src={Image}/>
                </div>
                <div className="About__Text">
                    <p> <b>
                    Primero fuimos Productos El Girasol, ahora somos El Girasol Cosmética Natural. </b></p>
                    <p>
                    Pero, ¿Quiénes somos en realidad? Tras bambalinas somos un emprendimiento familiar que nació en plena pandemia tras muchas horas de estudio, análisis y muchas, pero muchas ganas de incrustarnos en el mundo de los productos sustentables.</p>
                    <p>Somos apasionados por la naturaleza y el medio ambiente que están dispuestos a cambiar su forma de vida a una mucho más sustentable y, junto con nuestro propio crecimiento, queremos ayudar a que la gente conozca y quiera incrustarse en este nuevo mundo.</p>
                    <p>Nuestra filosofía es “Hecho con amor” porque todo lo que hacemos lo hacemos a pulmón, con mucho tiempo y dedicación para que cada cliente se sienta único y apoyado en este enorme cambio a la cosmética zero waste. </p>
                    <p>Además, queremos que la gente vea que ser sustentable no implica cumplir con muchos prejuicios que la sociedad impuso para los productos naturales y la gente que los utiliza. El uso de químicos industriales puede no solo dañar el medio ambiente, sino que también puede dañar nuestros cuerpos.</p>
                    <p> <b>¿Te animás a acompañarnos en este viaje? </b></p>
                    
                </div>
            </div>
        </div>
    )
}
