import { useParams } from "react-router-dom"


function Saludo(){
 
    let params = useParams() //podemos hacer asi o directamente poner useParams().nombre en el return
    let nombre =params.nombre
    return (<h1>Hola {nombre}</h1>)
}

export default Saludo