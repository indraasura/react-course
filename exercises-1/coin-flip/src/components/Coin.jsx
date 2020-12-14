import React, { Component } from 'react';

class Coin extends Component {
    state = { 
        face: '',
        headCount: 0,
        tailCount: 0,
        tossCount: 0
    }
    
    handleClick = () => {
        var faces = ['H', 'T']
        var randIndex = Math.floor(Math.random() * faces.length)
        var face = faces[randIndex]
        if(face === 'H'){
            this.setState({
                face: 'H',
                headCount: this.state.headCount + 1,
                tossCount: this.state.tossCount + 1
            })
        }
        if(face === 'T'){
            this.setState({
                face: 'T',
                tailCount: this.state.tailCount + 1,
                tossCount: this.state.tossCount + 1
            })
        }
    }
    render() { 
        const coinFace = this.state.face
        const coinImg = `https://tinyurl.com/react-coin-${coinFace}-jpg`
        return ( 
            <div>
                {this.state.face === 'H' ? <img src="https://tinyurl.com/react-coin-heads-jpg"/> : <img src="https://tinyurl.com/react-coin-tails-jpg"/>}
                <button onClick={this.handleClick}>Toss Coin</button>
            </div>

        );
    }
}
 
export default Coin;