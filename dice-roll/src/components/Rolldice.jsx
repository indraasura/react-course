import React, { Component } from 'react'
import Die from './Die'

class Rolldice extends Component {
    state = {
        die1: 1,
        die2: 1
    }

    handleRoll = () => {
        let die1 = Math.ceil(Math.random() * 6)
        let die2 = Math.ceil(Math.random() * 6)
        this.setState({ die1, die2 })
    }

    handleButtonClick = () => {

    }

    render() {
        return (
            <div className="wrapper">
                <div className="die-container">
                    <Die value={this.state.die1} />
                    <Die value={this.state.die2} />
                </div>

                <button onClick={this.handleRoll}>Roll Dice!</button>
            </div>
        )
    }
}

export default Rolldice