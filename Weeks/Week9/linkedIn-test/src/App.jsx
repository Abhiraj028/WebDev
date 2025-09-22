import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostComponent from '../components/PostComponent'
import NavBar from "../components/NavBar"

function App() {
  
  const [posts,setPosts] = useState([])
  const Aarray = [{name:"blud",followers:150},{name:"jello",followers:15},{name:"clug",followers:445}]
  
  function addPosts(){
      const newe = Aarray.map((ar,index) => <PostComponent name={ar.name} followers={ar.followers} key={index}/>)

    setPosts(newe)
    console.log(Aarray)
  }

  return (
    <>
    <button onClick={addPosts}>Posts Button</button>
    {posts}
    <NavBar/>
    </>
  )
}

export default App
