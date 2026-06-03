import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import NavbarRB from './components/NavbarRB';


function App() {

  
  console.log('App')
  return (  
    <>
    <BrowserRouter>
      
      <NavbarRB/>
      <Routes>
        <Route path="/" element={<ItemListContainer/> }/>
        <Route path="/category/:type" element={<ItemListContainer saludo="Categoria"/> }/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      
    </BrowserRouter>
    </>
  )
} 

export default App    

