import React, {useContext, useState, useEffect } from "react";
import ItemCount from "../components/ItemCount/ItemCount";
import ItemDetail from '../components/ItemDetail/ItemDetail';
import {useHistory} from 'react-router-dom'
import { CartContext } from '../Containers/CartContext'
import './ItemDetailContainer.css'
import {itemCollection} from '../firebase'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

function ItemDetailContainer() {
    const [product,setProduct] = useState({
      id:'',
      title:'',
      description:'',
      price: ''
    })
    const {id} = useParams () 
    const [count, setCount] = useState(0)
    const [showCounter, setShowCounter] = useState(true)
    const cart = useContext( CartContext )
    const history = useHistory()

    function onAdd(){
      setShowCounter(false)
      cart.setCartItem({id, count:count, title: product.title, price: product.price, stock:product.stock, totalPrice: (count * product.price)})
      history.push('/Carrito')
    }
    useEffect (() =>{
      function getProduct(ItemId) {
        const itemInCollection = itemCollection.doc(ItemId) 
        itemInCollection
            .get()
                .then(doc => {
                  const product = doc.data()
                  setProduct({id: doc.id,... product})
                })
      }
    getProduct(id)
    },[])

  return(
  <div className="Detail__Container">   
    <div className="Back__button">
            <Link to={`/Tienda`}><button className="btn btn-info">Regresar a la tienda</button></Link>
            </div>
    <div className="SingleProduct">
      <div className="Detail">
      <div className="Detail__image">
        <img src={product.image}></img>
      </div>
        <div className="Detail__text">
          <ItemDetail image={product.image} title={product.title} description={product.description} count={count} id={id} price={product.price} stock={product.stock}
          totalPrice={product.totalPrice}/>
        <div className="Detail__text__buttons"> 
            <ItemCount className="d-inline" onAdd={setCount} count={count} showCounter={showCounter} stock= {product.stock}  price={product.price}/>
            {count > 0 ? <button className="btn btn-success CartSuccess" onClick={onAdd}>Finalizar mi compra</button> : <button className="btn btn-success" disabled onClick={onAdd}>Finalizar mi compra</button> }
          </div>
        </div>
      </div>
    </div>
  </div> 
      )
    }

export default ItemDetailContainer
