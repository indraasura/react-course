import React, { Component } from 'react'
import Machine from './components/Machine'

class App extends Component {
  
  render() { 
    const values = ["x", "y", "z"]
    return ( 
      <div>
        <Machine
          slot1={Math.floor((Math.random() * 10) / values.length)}
          slot2={Math.floor((Math.random() * 10) / values.length)}
          slot3={Math.floor((Math.random() * 10) / values.length)}
        />
       <Machine
          slot1={Math.floor((Math.random() * 10) / values.length)}
          slot2={Math.floor((Math.random() * 10) / values.length)}
          slot3={Math.floor((Math.random() * 10) / values.length)}
        />
        <Machine
          slot1={Math.floor((Math.random() * 10) / values.length)}
          slot2={Math.floor((Math.random() * 10) / values.length)}
          slot3={Math.floor((Math.random() * 10) / values.length)}
        />
      </div>
    );
  }
}
 
export default App;