import { useState, useEffect } from "react"

const ItemCount =()=>{
 
const [count, setCount]= useState(1)
    console.log ('ItemCount')

    const sumar =()=>{
        setCount (count + 1)
    }
     const restar =()=>{
        if(count >0){
        setCount (count - 1)
        }
    }
    // useEffect(()=>{

    // }, [array de dependencias])

    return(
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
        </div>
    )
}
export default ItemCount
