import React from 'react';
import './ItemDetail.css'

export default function ItemDetail({title, description, count, price}) {
    return(
        <div className="product-container">
            <h1 className="ItemDetail__title">{title}</h1>
            <h2 className="ItemDetail__description">{description}</h2>
            <h3 className="ItemDetail__price">precio:${price}</h3>
            <h3 className="ItemDetail__count">cantidad seleccionada: {count}</h3>
        </div>
    )
}