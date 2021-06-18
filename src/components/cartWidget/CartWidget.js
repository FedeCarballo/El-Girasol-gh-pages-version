import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import widget from '../../assets/images/Shopping__Cart.svg';
// import widget from '../../assets/images/cart.png';
import { CartContext } from '../../Containers/CartContext';
import './CartWidget.css'
export default function CartWidget(){
    
    const {CantidadEnCarrito} = useContext(CartContext)

    return(
        <Link to={`/Carrito`}>
        {CantidadEnCarrito > 0 ? <div className="CartWithItems">
            <div className="CartWidget__Numbers">{CantidadEnCarrito}</div>
            <img src={widget} className="cart__img" />
        </div>
         : <div className="CartWithoutItems">
             <h1 className="CartWidget__Empty">0</h1>
             <img src={widget} className="cart__img" />
         </div>}
        </Link>
    )
}