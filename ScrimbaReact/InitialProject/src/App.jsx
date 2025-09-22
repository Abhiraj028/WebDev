import { useState } from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Main/>
    </>
  )
}

export default App
