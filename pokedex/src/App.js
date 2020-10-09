import React, { Component } from 'react';
import Pokedex from './components/Pokedex';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Pokedex />
      </div>
    );
  }
}
 
export default App;