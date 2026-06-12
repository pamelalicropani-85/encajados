import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {
  const {cart, clear, total, deleteItem} = useContext(CartContext)
  return (
    <div>
        <h1>Tu carrito 🛒</h1>
    <div>
        {cart.map((compra)=>(
            <div key={compra.id} style= {{display: 'flex', justifyContent: 'space-between', alignItems:'center', width: '100%', padding: '2rem'}}>
                <img src={compra.img} alt= {compra.name} style= {{width:'10rem'}}/>
                <span>{compra.name}</span>
                <span>{compra.quantity}</span>
                <span>${compra.price}</span>
                <span>precio final: ${compra.price * compra.quantity}</span>
                <button className='btn btn-danger' onClick={()=> deleteItem(compra.id)}>🗑️</button>
            </div>
        ))}
    </div>
        <span>Total a pagar: ${total()}</span>
    <div style={{display:'flex',justifyContent:'space-between', alignItems:'center',width:'80%', padding: '2rem'}}>
        <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
        <Link className='btn btn-success' to='/checkout'>Terminar compra</Link>
    </div>  
   </div>   
  )
}

export default CartView