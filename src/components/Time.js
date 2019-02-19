import React from 'react'
import BotaoGol from './BotaoGol'

export default class PlacarContainer extends React.Component {
    render(){
        return (      
            <div>
                <h1>{this.props.nome}</h1>
                <h2>{this.props.gols}</h2>
                <div>
                    <BotaoGol marcarGol={this.props.marcarGol}/>
                </div>               
            </div>
        )
    }
}