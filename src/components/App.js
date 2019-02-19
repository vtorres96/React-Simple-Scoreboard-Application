import React from 'react'
import PlacarContainer from './PlacarContainer'

const dados = {
    partida: {
        estadio: "Arena Corinthians",
        data: "17/02/2019",
        horario: "19h"
    },
    casa: {
        nome : "Corinthians"
    },
    visitante: {
        nome: "São Paulo"
    }
}

export default class App extends React.Component {
    render(){
        return (
            <PlacarContainer {...dados} />
        ) 
    }
}