import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Entry from '../components/Entry'
import data from "../data/data.js"

function App() {
  const newArr = data.map( item => {
    return (
      <Entry
        key={item.id}
        entry={item}
      />
    )
  })

  return (
    <div className="entry">

    <Header/>
    {newArr}
    </div>
  )
}

export default App
