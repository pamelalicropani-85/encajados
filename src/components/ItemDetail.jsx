import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detalle}) => {
  const onAdd = (cantidad)=>{
    alert(`Agregaste al carrito ${cantidad} de unidades de ${detalle.name}`)
  }
  return (
    <div>
        <h2>Rompecabeza - {detalle.name}</h2>
        <img src={detalle.img} alt= {detalle.name}/>
        <p>${detalle.price},00</p>
        <p>Unidades disponibles: {detalle.stock}</p>
        <p>Cantidad de piezas: {detalle.description}</p>
        <ItemCount stock={detalle.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail