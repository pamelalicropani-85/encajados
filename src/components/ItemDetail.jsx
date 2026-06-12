import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detalle, invalid}) => {
  const [purchase, setPurchase] = useState(false)

// const contexto = useContext(CartContext)
// console.log(contexto, 'contexto') 
const {cart, addItem}= useContext(CartContext)
console.log(cart, 'contexto')  
 const onAdd = (cantidad)=>{
    addItem(detalle, cantidad)
   setPurchase(true)
  }
  return (
    <>
    {
      invalid ? <h2>El producto no existe</h2>
      : <div style={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px'
      }}>
        <h2>Rompecabeza - {detalle.name}</h2>
        <img src={detalle.img} alt= {detalle.name}/>
        <p>${detalle.price},00</p>
        <p>Unidades disponibles: {detalle.stock}</p>
        <p>Cantidad de piezas: {detalle.description}</p>
        {purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>:<ItemCount stock={detalle.stock} onAdd={onAdd}/>}
    </div>
    }
    </>
  )
}

export default ItemDetail