import {BrowserRouter, Route, Link} from "react-router-dom"
import Saludo from "./Saludo";
import { useState } from "react";
import './App.css';






function App() {
  const [caja, setCaja]= useState("")
  /* const [input, setInputs]= useState=("") */ // no se porque si le llamos setInput me da mogollon de fallos porque esta definido pero si le llamo de cualquier manera no
 
  
  function mostrar(e){
    setCaja(e.target.value)
  }
  
  return (
    <BrowserRouter>
    <Route>
      <h2>Introduce tu nombre</h2>
      <input type="text" onChange={mostrar} value={caja}/>
      <Link to={"/saludo/"+ caja }>Saludar</Link>
    </Route>
    <Route path='/saludo/:nombre'>
      <Saludo />
    </Route>
</BrowserRouter>
  );
}

export default App;
