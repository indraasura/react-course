import React, { Component } from 'react'
import Die from './Die'

class Rolldice extends Component {
    state = {
        die1: 1,
        die2: 1,
        rolling: false,
        disabled: false
    }

    handleRoll = () => {
        let die1 = Math.ceil(Math.random() * 6)
        let die2 = Math.ceil(Math.random() * 6)
        this.setState({ die1, die2, rolling: true, disabled: true })
        // wait 1s, then set rolling to false
        setTimeout(() => {
            this.setState({rolling: false, disabled: false})
        }, 1000)
    }

    render() {
        return (
            <div className="wrapper">
                <div className="die-container">
                    <Die value={this.state.die1} />
                    <Die value={this.state.die2} />
                </div>
                <button disabled={this.state.disabled} onClick={this.handleRoll}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}

export default Rolldice