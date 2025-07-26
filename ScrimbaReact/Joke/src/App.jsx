import { useState } from 'react'
import './App.css'
import Joke from '../components/Joke'
import jokesData from '../data/joke.js'


function App() {

  const newArr = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline}/>
  })

  return (
    <>
    {newArr}
    </>
  )
}

export default App
