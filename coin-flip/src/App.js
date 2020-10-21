import React, { Component } from 'react'
import Coin from './components/Coin'
import './App.css'

const tails = 'https://1.bp.blogspot.com/-axMqjO2fmug/W3km7ydbocI/AAAAAAAAAMg/VFmL2acMhAYyIillBSmo_KPr4rFMrIkUQCLcBGAs/s400/dime-tails.jpg'
const head = 'https://tinyurl.com/react-coin-heads-jpg'
class App extends Component {
  state = { 
    isHead : false,
    headCount: 0,
    tailCount: 0,
    flipCount: 0
  }

  handleClick = () => {
    const probability = Math.random()
    if(probability > 0.5){
      this.setState({
        isHead: true,
        headCount: this.state.headCount + 1,
        tailCount: this.state.tailCount,
        flipCount: this.state.flipCount + 1
      })
    } else {
      this.setState({
        isHead: false,
        headCount: this.state.headCount,
        tailCount: this.state.tailCount + 1,
        flipCount: this.state.flipCount + 1
      })
    }
  }

  render() { 
    const { headCount, tailCount, flipCount } = this.state
    return ( 
      <div className="wrapper">
        {this.state.isHead ? <Coin face={head}/> : <Coin face={tails}/> }
        <button onClick={this.handleClick}>Flip</button>
        <p>Out of {flipCount} flips, {headCount} were heads and {tailCount} were tails</p>
      </div>
    );
  }
}
 
export default App;