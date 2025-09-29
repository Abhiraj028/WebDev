import { useState, useRef, useEffect } from 'react'
import './App.css'
import { useFetch } from '../hooks/useFetch'
import { usePrev } from '../hooks/usePrev'

function App() {  
  const [count,setCount] = useState(1)
  const prevCount = usePrev(count)
  const {fetchData, loading} = useFetch('https://jsonplaceholder.typicode.com/todos/'+count)
  console.log(prevCount)
  function add(){
    setCount(prev => prev+1)
  }

  return (
    <>
      {loading ? "Loading...." : fetchData.title}
      <br/>
      <button onClick={add}>Add</button>
      <br/>
      <p>The prev count is :{prevCount}</p>
    </>
  )
}

export default App
