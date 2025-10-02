import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export function YearBody(){
    const yearRef = useRef()
    const navigate = useNavigate()

    function pressed(){
        verify(parseInt(yearRef.current.value))
    }
    
    function verify(year){
        const currYear = 2025
        if(currYear - year < 18){
            alert("You can't access this website, apologies")
            return
        }else{
            alert("Welcome, please Proceed")
            navigate("/email")
            return
        }
    }
  return(
    <>
      <div className='flex flex-col items-center gap-5'>
        <div className='text-3xl mb-20'>Verify your age</div>
        <div className='text-[#d9d9d971]'>Please confirm your birth year. This data will not be stored</div>
        <input type='text' ref={yearRef} placeholder='Enter Year' className='bg-gray-700/50  text-white placeholder-gray-400 rounded-lg w-sm h-12 text-center text-2xl'></input>
        <button onClick={pressed} className='cursor-pointer bg-[#d9d9d9d3]/80 hover:bg-teal-500 text-gray-900 rounded-xl w-sm h-12 text-2xl mt-7'>Continue</button>
      </div>
    </>
  )
}

