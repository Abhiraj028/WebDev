import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("White");

  function colorFn(col){
    setColor(col);
  }

  return (
    <div className='fixed inset-0 duration-200'
     style={{backgroundColor: color}}>

      <div className='absolute top-230 flex bg-white text-black rounded-3xl gap-5 p-2 text-9xl left-117'>
        
        <div className='bg-slate-700 text-white text-sm p-2 rounded-xl w-20 cursor-pointer' onClick={()=>colorFn("Red")}>Red</div>
        <div className='bg-slate-700 text-white text-sm p-2 rounded-xl w-20 cursor-pointer' onClick={()=>colorFn("Blue")}>Blue</div>
        <div className='bg-slate-700 text-white text-sm p-2 rounded-xl w-20 cursor-pointer' onClick={()=>colorFn("Green")}>Green</div>
        <div className='bg-slate-700 text-white text-sm p-2 rounded-xl w-20 cursor-pointer' onClick={()=>colorFn("Grey")}>Grey</div>
        <div className='bg-slate-700 text-white text-sm p-2 rounded-xl w-20 cursor-pointer' onClick={()=>colorFn("Black")}>Black</div>
        <div className='bg-slate-700 text-white text-sm p-2 rounded-xl w-20 cursor-pointer' onClick={()=>colorFn("Orange")}>Orange</div>
        <div className='bg-slate-700 text-white text-sm p-2 rounded-xl w-20 cursor-pointer' onClick={()=>colorFn("White")}>White</div>
        <div className='bg-slate-700 text-white text-sm p-2 rounded-xl w-20 cursor-pointer' onClick={()=>colorFn("Yellow")}>Yellow</div>
        <div className='bg-slate-700 text-white text-sm p-2 rounded-xl w-20 cursor-pointer' onClick={()=>colorFn("Crimson")}>Crimson</div>
        <div className='bg-slate-700 text-white text-sm p-2 rounded-xl w-20 cursor-pointer' onClick={()=>colorFn("Teal")}>Teal</div>

        </div>
     </div>
  )
}

export default App
