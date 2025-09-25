import { createContext, useContext, useState } from 'react'
import './App.css'

const lightContext = createContext()

function App() {

  return (
    <>
        <LightBulb />
    </>
  )
}

function LightProvider({children}){
  const [light,setLight] = useState(true)

  return(
    <>
    <lightContext.Provider value={{light,setLight}}>
      {children}
    </lightContext.Provider>
    </>
  )
}

function LightBulb(){
  return (
    
  <>
    <LightProvider>
      <Light />
      <StateSwitch />
    </LightProvider>
  </>
  )
}

function Light(){
  const {light} = useContext(lightContext)
  return(
    <>
    <div>Light is {light ? "on" : "off"}</div>
    </>
  )
}

function StateSwitch(){
  const {setLight} = useContext(lightContext)
  function Switcher(){
    setLight(prev => !prev)
  }
  return(
    <button onClick={Switcher}>Change Light</button>
  )
}



export default App
