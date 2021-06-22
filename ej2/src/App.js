import { useState } from 'react';
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom';
import './App.css';


function App() {
  function Resultados(){
    let numero =parseInt(useParams().numero) //no se porque no me deja llevar el componente fuera del app
    let numero2 =parseInt(useParams().numero2)
    return (<div>
      <p>suma: {numero +numero2}</p>
      <p>restar: {numero -numero2}</p>
      <p>multiplicar: {numero *numero2}</p>
      <p>dividir: {numero /numero2}</p>
      <p>resto: {numero %numero2}</p>
    </div>)
  }
  
  

  const [numero, setNumero]= useState(0)
  const [numero2, setNumero2]= useState(0)

  return (
    <BrowserRouter>
    <Link to={`/resultados/${numero}/${numero2}`}>ver resultados</Link>
    <button
          onClick={() => {
            setNumero(0);
            setNumero2(0);
          }}
        >
          Reset
        </button>
    <Route>
      <div>
      <button onClick={()=>{setNumero(numero+1)}}>sumar numero 1</button> {/* funciona pero para reiniciar le tienes que dar al boton de reniciar a ver resultados y tocar el primer boton de sumar nose muy raro */}
      <button onClick={()=>{setNumero(numero-1)}}>restar numero1</button>
      </div>
      <div>
      <button onClick={()=>{setNumero2(numero2+1)}}>sumar numero 2</button>
      <button onClick={()=>{setNumero2(numero2-1)}}>restar numero 2</button>
      </div>
    </Route>
    <Route path="/resultados/:numero/:numero2">
      <Resultados/>
    </Route>
    </BrowserRouter>
  );
}
/* function Operaciones() {
  let num1 = parseInt(useParams().num1);
  let num2 = parseInt(useParams().num2);

  return (
    <div>
      <p>Sumar: {num1 + num2}</p>
      <p>Resta: {num1 - num2}</p>
      <p>Multiplicación: {num1 * num2}</p>
      <p>División: {num1 / num2}</p>
      <p>Resto: {num1 % num2}</p>
    </div>
  );
}

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <h1>{num1}</h1>
        <button onClick={() => setNum1(num1 + 1)}>Sumar</button>
        <button onClick={() => setNum1(num1 - 1)}>Restar</button>
      </div>

      <div>
        <h1>{num2}</h1>
        <button onClick={() => setNum2(num2 + 1)}>Sumar</button>
        <button onClick={() => setNum2(num2 - 1)}>Restar</button>
      </div>
      <div>
        <Link to={`/resultados/${num1}/${num2}`}>Ver resultados</Link>
        <button
          onClick={() => {
            setNum1(0);
            setNum2(0);
          }}
        >
          Reset
        </button>
      </div>
      <Route path="/resultados/:num1/:num2">
        <Operaciones />
        <Link to="/">Volver</Link>
      </Route>
    </BrowserRouter>
  );
} */

export default App;
