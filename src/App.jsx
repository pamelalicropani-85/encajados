
import NavbarRB from "./components/NavbarRB"
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DinamicComponent from './examples/DinamicComponent';
import ComponentChildren from './examples/ComponentChildren';
import FetchContainer from './examples/FetchContainer';


function App() {
  const fecha = "Viernes 24 de Abril"
  const saludo = "Buenos días Pamela!"
  console.log('App')
  return (  
    <>
      
      <NavbarRB/>
      <ItemListContainer fecha={fecha} saludo={saludo}/>
      <ItemCount/>
      <FetchContainer/>
      
      {/* <ComponentChildren>
        <p>Hola a todos</p>
      </ComponentChildren>
      <ComponentChildren>
        <ItemCount/>
      </ComponentChildren>
      <ComponentChildren>
         <DinamicComponent title= 'This is fine' description="Hoy es lunes y esta todo bien" image= 'https://i.postimg.cc/9MqqkQP9/whatdoyoumeme-Deco3.png' btnText='Hola' color='primary'/>
      </ComponentChildren>      
      <DinamicComponent title= 'This is fine' description="Hoy es lunes y esta todo bien" image= 'https://i.postimg.cc/9MqqkQP9/whatdoyoumeme-Deco3.png' btnText='Hola' color='primary'/>
      <DinamicComponent title= 'This is fine' description="Hoy es lunes y esta todo mal" image= 'https://i.postimg.cc/9MqqkQP9/whatdoyoumeme-Deco3.png' btnText='Chau' color='secondary'/>
       */}
      
    </>
  )
} 

export default App

