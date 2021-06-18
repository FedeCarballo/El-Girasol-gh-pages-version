import React from 'react';
import Item from './Item';
import './ItemList.css';

export default function List({items}) {
    return(
        <div className="Tienda__Body">
            {
            items.map(i =>{
                return (
                    <Item key={i.id} title={i.title} description={i.description} price={i.price} id={i.id} stock={i.stock} image={i.image}/>
                )
            })
        }
        </div>
    )
}