import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../service/firebase"
import EmptyCart from "./EmptyCart"
import { Link } from "react-router-dom"


const Checkout=()=>{
    const [buyer, setBuyer]=useState({})
    const [secondMail, setSecondMail]= useState('')
    const [orderId, setOrderId]= useState('')
    const [error, setError]= useState(null)
    const [loading , setLoading ]= useState(null)
    const {cart, total, clear}=useContext(CartContext)


    const buyerData=(e)=>{
    setBuyer({
        ...buyer,
        [e.target.name]: e.target.value
    })
    
}

    console.log(buyer)

    const terminarCompra =(e)=>{
     e.preventDefault()
     if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.mail || !secondMail) {
        setError('Completa los campos')
     } else if (buyer.mail !== secondMail) {
        setError('Los correos deben coincidir')
     } else {
        setError(null)
        setLoading(true)
        let orden= {
           comparador: buyer,
           carrito: cart,
           total: total(),
           fecha: serverTimestamp()
        }
        const orderColl= collection(db, "orders")
        addDoc(orderColl, orden)
        .then((res)=>{
           setOrderId(res.id)
           clear()
        })
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
     }
    }
 
if (!cart.length && !orderId){
    return <EmptyCart/>
}
return(
    <>
        {
            orderId 
            ? <div>
                <h1>Muchas gracias por tu compra! 🤩</h1>    
                <h2>Orden de compra: {orderId}</h2>
                <Link to="/" className="btn btn-dark">Volver a Home</Link>
            </div>
            :<div>
            <h1>Complete sus datos</h1>
            {error && <small style={{color:"red"}}>{error}</small>}

            <form className= 'p-4 border rounded shadow-sm bg-light' onSubmit={terminarCompra}>
                <input  className= 'form-control' name='name' type='text' placeholder="Ingresa tu nombre" onChange={buyerData}/>
                <input  className = 'form-control' name='lastname' type='text' placeholder="Ingresa tu apellido"onChange={buyerData}/>
                <input  className ='form-control' name='address' type='text' placeholder="Ingresa tu direccion"onChange={buyerData}/>
                <input  className = 'form-control' name='mail' type='email' placeholder="Ingresa tu correo"onChange={buyerData}/>
                <input  className ='form-control' name='secondmail' type='email' placeholder="Repetí tu correo" onChange={((e)=>setSecondMail(e.target.value ))}/>
                <button type='submit' className="btn btn-success" disabled={loading}>{loading ?'Procesando compra...': 'Terminar Compra'}</button>
            </form>
        </div>
        }
    </>
)
}

export default Checkout