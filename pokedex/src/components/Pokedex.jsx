import React, { Component } from 'react';
import Pokecard from './Pokecard';
import '../static/css/pokedex.css'

const pokemonData = [
    {
        id: 4,
        name: "Charmander",
        type: "Fire",
        exp: 62
    },
    {
        id: 7,
        name: "Squirtle",
        type: "Water",
        exp: 63
    },
    {
        id: 11,
        name: "Metapod",
        type: "Bug",
        exp: 72
    },
    {
        id: 12,
        name: "Butterfree",
        type: "Flying",
        exp: 178
    },
    {
        id: 25,
        name: "Pikachu",
        type: "Electric",
        exp: 112
    },
    {
        id: 39,
        name: "Jigglypuff",
        type: "Normal",
        exp: 95
    },
    {
        id: 94,
        name: "Gengar",
        type: "Poison",
        exp: 225
    },
    {
        id: 133,
        name: "Eevee",
        type: "Normal",
        exp: 65
    }
]

class Pokedex extends Component {
    state = {}
    render() {
        let pokecard = pokemonData.map(pokemon => <Pokecard
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.exp}
        />)
        return (
            <div className="pokedex-container">
                <h1 className="pokedex-title">Pokedex</h1>
                <div className="pokedex">
                    {pokecard}
                </div>
            </div>

        );
    }
}

export default Pokedex;