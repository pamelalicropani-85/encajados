import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import NavbarRB from './components/NavbarRB';
import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/CheckOut';
function App() {
 const [qty, setQty]=useState(0)

  return (  
    <>
    <BrowserRouter>
      
      <CartProvider>
        <NavbarRB qty ={qty}/>
        <Routes>
         <Route path="/category/:type" element={<ItemListContainer saludo="Categoria "/> }/>
         <Route path="/" element={<ItemListContainer saludo="Bienvenidos a nuestra tienda de puzzles"/> }/>
         <Route path="/item/:id" element={<ItemDetailContainer setQty={setQty}/>}/>
         <Route path='/cart' element ={<CartContainer/>}/>
         <Route path='/checkout' element ={<Checkout/>}/>
         <Route path="*" element={<Error/>}/>
        </Routes>
      </CartProvider>
      
      
    </BrowserRouter>
    </>
  )
} 

export default App    

