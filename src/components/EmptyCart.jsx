import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap: '10px',
        minHeight: '60vh'
    }}>
        <h1>Tu carrito está vacío! 🥺</h1>
        <h2>Te invitamos a ver nuestros productos 🧩</h2>
        <Link to='/' className='btn btn-dark'>Ir a comprar</Link>
    </div>
  )
}

export default EmptyCart