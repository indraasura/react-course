import React from 'react'

const Pokecard = (props) => {
    const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`
    return(
        <div>
            <h2>{props.pokemon.name}</h2>
            <img src={pokemonImg} alt="pokemon"/>
            <p><strong>Type: </strong>{props.pokemon.type}</p>
            <p><strong>Exp: </strong>{props.pokemon.exp}</p>
        </div>
    )
}

export default Pokecard