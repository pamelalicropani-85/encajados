import { BsCart2 } from "react-icons/bs"
import {Badge} from 'react-bootstrap'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartWidgetRI =()=>{
   const {cart, totalQty}= useContext (CartContext)
    return(
        <div>
            <BsCart2 style={{ color: 'white', fontSize: '1.8rem' }} />
            {cart.length > 0 && <Badge pill bg="danger">
       {totalQty()}
      </Badge>} 
            
        </div>
    )
}

export default CartWidgetRI