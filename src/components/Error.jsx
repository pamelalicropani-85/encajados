import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div
    style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
    }}>
    <img src='/ERROR.png' alt='error'/>
    <Link to='/' className='btn btn-dark'>Volver al inicio</Link>    
    </div>
  )
}

export default Error