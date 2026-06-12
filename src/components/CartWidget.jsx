const CartWidget =(props)=>{
    console.log(props)
    return(
        <div>
            <span>🛒</span>
            <span style={{color:'red', fontWeight:'bold' }}>{props.count}</span>
        </div>
    )
}
export default CartWidget