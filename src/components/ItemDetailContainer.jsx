import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/asyncMock'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { db } from '../service/firebase'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = ({setQty}) => {
const [detalle, setDetalle] = useState ({})
const [loading, setLoading] = useState(true)   
const [invalid, setInvalid] = useState(null)
const {id} = useParams()

useEffect (()=>{
    const docRef = doc(db, "items", id)
    getDoc(docRef)
    .then((res)=> {
      if(res.data()){
        setDetalle({id:res.id, ...res.data()})
      }else{
setInvalid(true)
      }
    }) 
    .catch ((error)=> console.log(error))
    .finally(()=> setLoading(false))
},[id])
// useEffect (()=>{
//     getOneProduct(id)
//     .then((res)=> setDetalle(res)) 
//     .catch ((error)=> console.log(error))
//     .finally(()=> setLoading(false))
// },[id])

  return (
    <div>
      {
        loading ? <LoaderComponent text= 'Cargando detalle...'/> : <ItemDetail detalle={detalle} invalid ={invalid}/>
      }
    </div>
  )
}

export default ItemDetailContainer