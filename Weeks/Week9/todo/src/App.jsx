import { useEffect, useState } from 'react'

  const arr = []
  let indx = 1


function App() {
  const [todo, setTodo] = useState([])
  const [btnTrack,setbtnTrack] = useState(0)
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${indx}`)
      .then(response => response.json())
      .then(json => arr.push(json))
      console.log(arr)
      const newArr = arr.map(ar => <><h1>{ar.title}</h1><h2>{ar.completed}</h2></>)
      console.log(newArr)
      setTodo(newArr)
  },[btnTrack])

  function pressed(){
    indx++
    setbtnTrack(prev => prev +1)
  }

  return (
    <>
      <button className='btn' onClick={pressed}>Press me</button>
      {todo}
    </>
  )
}



export default App