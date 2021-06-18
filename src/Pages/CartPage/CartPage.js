import './CartPage.css';
import React, {useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {CartContext} from '../../Containers/CartContext';
import EmptyCart from '../../assets/images/empty_cart.svg'
export default function Cart() {

    const {cart, clear, TotalProductos} = useContext(CartContext);

    let history = useHistory()

    function Buy(){
        history.push('/Carrito/Buy')
    }

    if (cart.length === 0) 
    return (
    <div className="Cart__Empty">
        <div className="Empty__Container">
            <div className="Empty__imageAndText"> 
                <img src={EmptyCart}/>
                <h2 className=" Empty__Text">Aun no elegiste ningun producto</h2>
        </div>
            <div className="EmptyCart__button">
            <Link to={`/Tienda`}><button className="btn btn-info">Regresar a la tienda</button></Link>
            </div>    
        </div>
    </div>
    )
    return (
    <div className="Cart__WhithItems">
        <div className="CartItems__Container">
            <div className="CartItems__button">
            <Link to={`/Tienda`}><button className="btn btn-info">Regresar a la tienda</button></Link>
            </div>
            <h1 className="CartItems__Title">Mi Carrito</h1>
            <div className="CartItems__Table">
                <table className="table"> 
                    <thead> 
                        <tr className="CartTable"> 
                            <th scope="col">Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                            <th>Precio total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => {
                        return  <tr className="ItemsInCart" key= {item.id} >
                            <th scope="row">{item.title}</th>
                            <td>{item.count}</td>
                            <td>${item.price}</td>
                            <td>${item.price* item.count}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div> 
             <h2 className="CartItems__Total">Total: ${TotalProductos}</h2> 
            <div className="FinishBuy__buttons">
                <button onClick={() => Buy()} className="btn btn-success FinishBuy">Finalizar mi compra</button>
                
                <button onClick={clear} className="btn btn-danger ClearCart">Limpiar Carrito</button>
            </div>
        </div>
    </div>
    )
}
