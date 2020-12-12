import React from 'react'
import Pokecard from './Pokecard'

const Pokedex = (props) => {
    return(
        <div>
            {props.hand.map(pokemon => <Pokecard pokemon={pokemon}/>)}
            {props.totalExp}
        </div>
    )
}

export default Pokedex