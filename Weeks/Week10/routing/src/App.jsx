import { use, useState } from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Link to={"/"}> Home</Link>
      <Link to={"/whehh"}> Carti </Link>
      <Link to={"/go"}> Go</Link>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/' element={<Landing/>}/>
            <Route path="/whehh" element={<Whehh/>}/>
            <Route path="/go" element={<Go/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Layout(){
  return(
    <>
    <h1 style={{padding:"50px"}}>HELO THIS IS THE LAYOUT FOR /</h1>
    <Outlet/>
    <h1 style={{padding:"50px"}}>THANKS FOR COMING RA</h1>
    </>
  )
}

function Landing(){
  return(
    <h1>Helo Orewa Landing Page des</h1>
  )
}

function Whehh(){
  return(
    <h1>CARTYYYYYYYYYYYYYYYYYYY WHEHHHHHHHHHHH</h1>
  )
}

function Go(){
  const nav = useNavigate()
  function goBack(){
    
    nav("/whehh")
  }
  return(
    <>
    <h1>go? back?</h1>
    <button onClick={goBack}>Click</button>
    </>
  )
}

function Error(){
  return(
    <h1>You picked the wrong house foo</h1>
  )
}
export default App
