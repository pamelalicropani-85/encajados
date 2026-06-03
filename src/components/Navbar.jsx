import "../css/Navbar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const Navbar =({compras})=>{
    return(
        <nav className="nav-container">
            <NavLink className= "anchor-nav" to="/">
                <img style={{width:"20rem"}}src="../encajados.svg" alt="logo" />
            </NavLink>
            <NavLink className= "anchor-nav" to="/category/nuevos">Puzzles</NavLink>
            <NavLink className= " anchor-nav" to="/category/favoritos">Puzzles</NavLink>
            <NavLink className= " anchor-nav" to="/category/ofertas">Puzzles</NavLink>
            <CartWidget count ={5} compras ={compras}/>
        </nav>
        
    )
}
export default Navbar  