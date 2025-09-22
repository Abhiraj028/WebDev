import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function addValue(){
    if(count + 1 > 20){
      return;
    }
    setCount(prev => ++prev);
    console.log(count);
  }

  function removeValue(){
    if(count -1 < 0){
      return;
    }
    setCount(prev => --prev);
    console.log(count);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
