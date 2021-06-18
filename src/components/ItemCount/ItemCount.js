import React from 'react'
import './ItemCount.css'

export default function ItemCount({stock, onAdd, showCounter, count}) {

  if (!showCounter) return null
  return (
    <div>
    {  
    count < stock ? <button className="btn btn-primary AddButton" onClick={() => onAdd(count + 1)}>+</button> 
 : <button className="btn btn-primary AddButton" disabled onClick={() => onAdd(count + 1)}>+</button> 
}
    {
   count > 1 ? <button className="btn btn-danger LessButton" onClick={() => onAdd(count - 1)}>-</button>
   : <button className="btn btn-danger LessButton" disabled onClick={() => onAdd(count - 1)}>-</button>   
   }
    </div>
  )
}