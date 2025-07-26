import { useState } from 'react'
import './App.css'
import Joke from '../components/Joke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Joke setup="Why don't scientists trust atoms?" punchline="Because they make up everything!" />
      <Joke setup="What do you call fake spaghetti?" punchline="An impasta!" />
      <Joke setup="Why did the scarecrow win an award?" punchline="Because he was outstanding in his field!" />
      <Joke setup="Barcelona or Real Madrid?" punchline="Neither, I prefer watching paint dry!" />
      <Joke punchline="I told my computer I needed a break, and now it won't stop sending me beach wallpapers!" />
    </div>
  )
}

export default App
