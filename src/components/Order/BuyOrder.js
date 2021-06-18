import React, {useContext, useState} from 'react';
import { CartContext } from '../../Containers/CartContext';
import "firebase/firestore";
import Order from '../../services/OrderService';
import { useHistory } from 'react-router';
import './BuyOrder.css'

export default function BuyOrder() {

    let history = useHistory()
    const {cart, TotalProductos, clear} = useContext(CartContext)
    const [ docRef, setDocRef ] = useState('')
    const [formData, setFormData] = useState({  name:'',
                                                email:'',
                                                phone:'' })

    const handleInputChange = (event) => {
            setFormData({
                ...formData,
                [event.target.name] : event.target.value
    })}
    function sendOrder() {
        Order(cart, formData, TotalProductos)
            .then(res =>{ 
            setDocRef(res)
            clear()
        });
    }
    function backToHome(){
        history.push("/")
    }

    return (
        <div className="buyOrder__Container">
          <div className="Order__Detail">
          { !docRef ? <div className="DetailContainer"> 
            <h1 className="DetailContainer__Text">Este es tu pedido</h1> 
                    {
                        cart.map(item =>{

                            return(
                            <h3 className="Order__Details" key={item.id}>{item.count} {item.title} <br></br></h3>
                            )
                        })
                    }
                <p className="Order__Details__Total">Total: ${TotalProductos}</p>
              
                <form className="Order__form">
                    <label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="name"  placeholder="Nombre y Apellido" /> 
                        <br/>
                        <input type="text" className="form-control" onChange={handleInputChange} name="email"  placeholder="Mail" /> 
                        <br/>
                        <input type="text" className="form-control" onChange={handleInputChange} name="phone"  placeholder="Telefono" /> 
                        <br/>
                    </label>
                </form>
                    <button
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className='buybtn btn btn-success OrderSuccess' onClick={() => sendOrder()}>Finalizar Compra</button> </div> : 
                <div className= "SuccessDiv">
                    <h1 className="DetailContainer__Text"> Tu pedido ha sido confirmado! </h1>
                    <p className="IdText"> Tu compra se generó con el id <b><i>{docRef}</i></b></p>
                    <div className="Success__return__home">
                        <button className="backHomeBtn btn btn-success OrderSuccess" onClick={() => backToHome()}>Volver al home</button>
                    </div>
                </div>
                }
          </div>
        </div>
    )}


                


