import React, { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext([])


export function CartProvider(props){
    const [cart, setCart] = useState([])
 
    function removeItem(id) {
      const newToCart = cart.filter((item) => item.id !== id);
      setCart(newToCart);
    }   
    function clear(){
      setCart([])
    }
    function isInCart (id) {
      return cart.some(item => item.id === id)
    }
    function setCartItem({id, title, count, price, stock,totalPrice}) {
      const isCurrentInCart = isInCart(id)
      if (isCurrentInCart) {
        const newCart = cart.map(item => {
          if (item.id === id) {
            return {
              ...item,
              count: count + item.count,
              stock: stock,
              totalPrice: totalPrice,
            }
          }
        })
        return setCart([...newCart])
      }
      setCart([...cart, {id, title, count, price, stock,totalPrice}])
    }
    const cantidad = cart.map(item =>
      item.count)
    const CantidadEnCarrito = cantidad.reduce((prev, next)=> prev + next, 0);
        const precio = cart.map(item =>
     (item.price * item.count))   
    const TotalProductos = precio.reduce((prev, next) => prev + next, 0);
    return <CartContext.Provider value={{TotalProductos, CantidadEnCarrito, setCartItem, setCart, clear, removeItem, cart}}{...props} /> 
}