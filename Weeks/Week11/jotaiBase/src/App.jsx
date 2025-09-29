import { useEffect, useState } from 'react'
import './App.css'
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai"
import {atomFamily, loadable} from "jotai/utils"

const TODOS = [
  { id: 1, text: 'Learn Jotai', completed: true },
  { id: 2, text: 'Build a project', completed: false },
  { id: 3, text: 'Drink water', completed: false },
];

const countAtom = atom(1)

const evenAtom = atom(get => {
  const isEven = get(countAtom)
  if(isEven % 2 == 0){
     return true
  }
  return false
})

const userAtom = atom(async(get)=>{
  const countVal = get(countAtom)
  const response = await fetch("https://jsonplaceholder.typicode.com/users/"+countVal)
  const output = await response.json()
  return output.name
})

const loadableUserAtom = loadable(userAtom)

const todoFamily = atomFamily(id =>{
  return atom(TODOS.find(x => x.id == id))
})

function App() {

  const [count, setCount] = useAtom(countAtom)
  const evenVal = useAtomValue(evenAtom) 
  const userVal = useAtomValue(userAtom)
  const loader = useAtomValue(loadableUserAtom)
  const todoFetch = useAtomValue(todoFamily(count))
  useEffect(() => {
    setInterval(setter,500)
  },[])

  function setter(){
    setCount(prev => prev + 1)
  }
  
  return (
    <>
      {count}
      <br/>
      isEven? {evenVal?"Yes":"No"}
      <br/>
      {userVal == undefined ? "Names Ended":userVal}
      <div>{todoFetch == undefined ? "Todos Ended":todoFetch.text}</div>
    </>
  )
}

export default App
