import React, { Component } from 'react';
import '../static/css/pokecard.css'

const POKE_API = 'https://raw.githubusercontent.com/POKEAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render() { 
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return ( 
            <div className="pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt="charmander"/>
                <p><strong>Type: </strong>{this.props.type}</p>
                <p><strong>Experience: </strong>{this.props.exp}</p>
            </div>
        );
    }
}
 
export default Pokecard;