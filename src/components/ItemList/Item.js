import React from 'react';
import {Link} from 'react-router-dom';
import './Item.css'

export default function Item({id,title, description, stock, price, image }) { 


return(<Link to={`/Tienda/${id}`} stock={stock} price={price}>
        <div className="Tienda__Item">
                <div className="Item__image">
                        <img src={image} className="img-fluid"/>
                </div>
                <div className="Item__Text">
                        <h1 className="Item__title">{title}</h1>
                        <h2 className="Item__description">{description}</h2>
                        <h3 className="Item__price">${price}</h3>
               </div>
        </div >
        </Link>
    )
 }