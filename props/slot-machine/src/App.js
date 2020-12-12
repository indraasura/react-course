import './App.css'
import React from 'react'
import Machine from './components/Machine'

function App() {
  const slots = [1,2,3]
  return (
    <div>
      <h1>Slot Machine</h1><br/>
      <Machine slots={slots}/>
      <Machine slots={slots}/>
      <Machine slots={slots}/>
      <Machine slots={slots}/>
    </div>
  );
}

export default App;
