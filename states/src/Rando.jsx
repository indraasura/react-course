import React from 'react'

const Rando = (props) => {
    return (
        <div>
            <h1>Number is {props.num}</h1>
            {props.num === 7 ? <h1>You Win!!!</h1> : <button onClick={props.generateRandomNumber}>Get Random Number</button>}
        </div>
    )
}

export default Rando