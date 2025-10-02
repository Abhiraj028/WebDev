import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { atom, useSetAtom } from "jotai"

export const emailAtom = atom("")

export function EmailBody(){
    const mailRef = useRef()
    const navigate = useNavigate()
    const emailSetter = useSetAtom(emailAtom)

    function pressed(){
        verify(mailRef.current.value)
    }
    
    function verify(mail){
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        
        if(!mail || mail.trim() === ""){
            alert("Email is required")
            return 
        }
        
        if(!emailPattern.test(mail)){
            alert("Please enter a valid email")
            return 
        }
        emailSetter(mail)
        navigate("/otp")
    }
  return(
    <>
      <div className='flex flex-col items-center gap-5'>
        <div className='text-3xl mb-16'>Let's get Started</div>
        <input type='text' ref={mailRef} placeholder='Enter your email' className='bg-gray-700/50  text-white placeholder-gray-400 rounded-lg w-sm h-12 text-center text-2xl'></input>
        <button onClick={pressed} className='cursor-pointer bg-[#d9d9d9d3]/80 hover:bg-teal-500 text-gray-900 rounded-xl w-sm h-12 text-2xl mt-7'>Continue</button>
      </div>
    </>
  )
}