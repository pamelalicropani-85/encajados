import React, { useState } from 'react'

const Input = () => {
    const [nombre, setNombre]= useState('')
    const handleChange = (event)=>{
        console.log(event, 'evento')
        console.log (event.target, 'quien ejecuta el evento')
        console.log (event.target.value, 'acceder a la info')
        setNombre(event.target.value)
    }
  return (
    <div>
       <h2>Input</h2>
       <input className='form-control' placeholder='Qué estás buscando...' type='search' name='nombre' onChange={handleChange}/>
        <p>{nombre}</p>
    </div>
  )
}

export default Input