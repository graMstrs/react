import React, { useState } from "react"

// Reglas de los hooks
// 1. -no se llaman en loops ni condiciones ni whiles ni nada 
// siempre se llaman en el nivel mas alto del componente.App
// 2. solo se llaman en 2 partes  
//     . componentes de React
//     . custom hooks 
// 3. Cuando creemos un custom hooks siempre debe de comenzar con useNombre


//COMPONENTE BASADO EN CLASES
// class App extends Component{
//     state = { contador: 0 }
//     incrementar = () => {
//         this.setState({contador: this.state.contador + 1})
//     }

//     render(){
//         return(
//             <div>
//                 Contador: {this.state.contador}
//                 <button onClick={this.incrementar}>Incrementar</button>
//             </div>
//         )
//     } 
// } 

// COMPONENTE FUNCIONAL

//CUSTOM HOOK
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador + 1)
    }
    return [contador, incrementar]
} 


const App = () => {
    const [contador, incrementar] = useContador(0)
    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default App