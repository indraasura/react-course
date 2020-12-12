import React from 'react'
import Pokedex from './Pokedex'

const pokemonData = [
    {
        id: 4,
        name: 'Charmander',
        type: 'fire',
        exp: 62
    },
    {
        id: 7,
        name: 'Squirtle',
        type: 'water',
        exp: 63
    },
    {
        id: 11,
        name: 'Metapod',
        type: 'bug',
        exp: 72
    },
    {
        id: 12,
        name: 'Butterfree',
        type: 'flying',
        exp: 178
    },
    {
        id: 25,
        name: 'Pikachu',
        type: 'electric',
        exp: 112
    },
    {
        id: 39,
        name: 'Jigglypuff',
        type: 'normal',
        exp: 95
    },
    {
        id: 94,
        name: 'Gengar',
        type: 'poison',
        exp: 225
    },
    {
        id: 133,
        name: 'Eevee',
        type: 'normal',
        exp: 65
    }
]

var hand1 = []
var hand2 = [...pokemonData]

while(hand1.length < hand2.length){
    let randIndex = Math.floor(Math.random() * hand2.length)
    let randPokemon = hand2.splice(randIndex, 1)
    hand1.push(randPokemon[0])
}

console.log(hand1)
console.log(hand2)
let total1 = Object.values(hand1).reduce((t, {exp}) => t + exp, 0)
let total2 = Object.values(hand2).reduce((t, {exp}) => t + exp, 0)

const Pokegame = () => {
    return (
        <div>
            {total1 > total2 ? <h1>Winner</h1> : <h1>Loser</h1>}
            <Pokedex hand={hand1} totalExp={total1}/>
            {total2 > total1 ? <h1>Winner</h1> : <h1>Loser</h1>}
            <Pokedex hand={hand2} totalExp={total2}/>
        </div>
    )
}

export default Pokegame