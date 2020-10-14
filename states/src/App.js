import React, { Component } from 'react'
import Rando from './Rando'

class App extends Component {
  state = { 
    num: 1
  }

  generateRandomNumber = () => {
    let num = Math.floor(Math.random() * 10)
    this.setState({num})
  }

  render() { 
    return ( 
      <div>
        <Rando 
          num={this.state.num}
          generateRandomNumber={this.generateRandomNumber}
        />
      </div>
    );
  }
}
 
export default App;