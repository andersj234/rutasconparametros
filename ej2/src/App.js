import { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  
  const [numero, setNumero]= useState(0)
  const [numero2, setNumero2]= useState(0)

  return (
    <BrowserRouter>
    <Link to={"/sures1/"+ numero}>sumar y restas 1</Link>
    <Link to={"/sures2/"+ numero2}>sumas y restas 2</Link>
    <Route>
      <button onClick={()=>{setNumero(numero+1)}}>sumar numero 1</button>
      <button onClick={()=>{setNumero(numero-1)}}>restar numero1</button>
      <button onClick={()=>{setNumero2(numero2+1)}}>sumar numero 2</button>
      <button onClick={()=>{setNumero2(numero2-1)}}>restar numero 2</button>
    </Route>
    <Route path="/sures1/:numero">
      <h1>{numero}</h1>
    </Route>
    <Route path="/sures2/:numero2">
    <h1>{numero2}</h1>
    </Route>
    </BrowserRouter>
  );
}

export default App;
