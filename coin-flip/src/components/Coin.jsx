import React from 'react'

const Coin = ({ face }) => {
    return(
        <div class="coin">
            <img src={face} alt="coin face"/>
        </div>
    )
}

export default Coin