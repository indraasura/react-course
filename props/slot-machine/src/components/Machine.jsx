import React from 'react'

const Machine = (props) => {
    let i = 0
    const s = []
    while(i < props.slots.length){
        let randIndex = Math.floor(Math.random()*props.slots.length)
        s.push(props.slots[randIndex])
    }
    return(
        <div>
            <p>{s[0]} {s[1]} {s[2]}</p>
            { s[0] === s[1] && s[1] === s[2] ? <p>You Win!!!</p> : <p>You Lose!!!</p> }
        </div>
    )
}

export default Machine