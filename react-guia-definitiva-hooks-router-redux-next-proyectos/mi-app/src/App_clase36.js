import { Component } from "react";

class Button extends Component{
    state={}
    constructor(props){
        super(props)
        console.log('constructor', props)
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('component did update', prevProps, prevState)
    }

    componentWillUnmount(){
        console.log('desmontando componente', this.prop, this.state);
    }


    render(){
        console.log('render de button');
        return (
            <button onClick={() => this.setState({prop: 1})}>enviar</button>
        )
    }    
}


class App extends Component {
    state = {
        valor: 3
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <p>
                    Hola Mundo!
                </p>

                { this.state.valor === 3
                    ? <Button chanchito='feliz'/>
                    : null
                }
                <button 
                    className={`${this.state.valor}`}
                    onClick= { () => this.setState({valor: 2}) }
                >
                    Enviar
                </button>
            </div>
        )
    }
}

export default App