import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "../examples/Input"

const ItemListContainer =({saludo, fecha})=>{
const [data, setData]=useState([])
const {type} =useParams()
console.log(type)

    useEffect (()=>{
        getProducts()
        .then ((res)=>{
            if (type){
                setData(res.filter((prod)=>prod.category === type))
            }else{
                setData(res)
            }
        })
        .catch ((error)=>console.log(error))
    },[type])
        console.log('ItemListContainer', data)
    return(
        <div>
            <Input/>
            <h1>{saludo}</h1>

            <p>{fecha}</p>

            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer