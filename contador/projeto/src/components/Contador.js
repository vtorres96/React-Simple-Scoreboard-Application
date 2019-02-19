import React from 'react'

export default class Contador extends React.Component {

    constructor(){
        super()
        this.state = {
            contador: 0,
        }
    }

    incrementar(){
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    decrementar(){
        this.setState({
            contador: this.state.contador - 1,
        })
    }
    
    render(){
        return (      
            <div>
                <h1>{this.state.contador}</h1>
                <div>
                    <button onClick={this.incrementar.bind(this)}>Incrementar</button>
                    <button onClick={this.decrementar.bind(this)}>Decrementar</button>
                </div>             
            </div>
        )
    }
}