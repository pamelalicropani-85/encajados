import "../css/Navbar.css"
import CartWidget from "./CartWidget"

const Navbar =()=>{
    return(
        <nav className="nav-container">
            <a className= "anchor-nav" href="">
                <img style={{width:"20rem"}}src="../encajados.svg" alt="logo" />
            </a>
            <a className= " anchor-nav" href="">Tramites</a>
            <a className= "anchor-nav" href="">Turnos</a>
            <a className= "anchor-nav" href="">Vencimientos</a>
        </nav>
        
    )
}
export default Navbar