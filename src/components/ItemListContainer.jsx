import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
const ItemListContainer =({saludo, fecha})=>{
const [data, setData]=useState([])    
    useEffect (()=>{
        getProducts()
        .then ((res)=>setData(res))
        .catch ((error)=>console.log(error))
    },[])
        console.log('ItemListContainer', data)
    return(
        <div>
            <h1>{saludo}</h1>

            <p>{fecha}</p>

            <ItemList data={data}/>
           {/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
    
        </div>
    )
}
export default ItemListContainer