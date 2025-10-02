import { atom, useAtomValue, useAtom } from "jotai"
import { emailAtom } from "./EmailBody"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const timerAtom = atom("5:00")

export function OTPBody(){
    const [timerr,setTimerr] = useAtom(timerAtom)
    let secs = useRef(301)
    
    useEffect(() => {
        const timeOut = setInterval(() => {
            secs.current--
            
            if(secs.current <= 0){
                clearInterval(timeOut)
                setTimerr("0:00")
                return
            }
            
            const timeMin = Math.floor(secs.current / 60)
            const timeSec = secs.current % 60
            
            setTimerr(`${timeMin}:${timeSec.toString().padStart(2, '0')}`)
        }, 1000)
        
        return () => clearInterval(timeOut) 
    }, [])


    const emailVal = useAtomValue(emailAtom)
    return(
        <>
      <div className='flex flex-col items-center gap-5'>
        <div className='text-3xl mb-20'>Check Your Email For A Code</div>
        <div className="flex gap-2">
            <div className='text-[#d9d9d98f]'>Please enter the verification code sent to your email id:</div>
            <div className="">{emailVal}</div>
        </div>
        <div className="flex gap-2">
            <input type='text'  placeholder='' className='bg-gray-700/50  text-white rounded-lg text-center text-xl w-12 h-12'></input>
            <input type='text'  placeholder='' className='bg-gray-700/50  text-white rounded-lg text-center text-xl w-12 h-12'></input>
            <input type='text'  placeholder='' className='bg-gray-700/50  text-white rounded-lg text-center text-xl w-12 h-12'></input>
            <input type='text'  placeholder='' className='bg-gray-700/50  text-white rounded-lg text-center text-xl w-12 h-12'></input>
            <input type='text'  placeholder='' className='bg-gray-700/50  text-white rounded-lg text-center text-xl w-12 h-12'></input>
            <input type='text'  placeholder='' className='bg-gray-700/50  text-white rounded-lg text-center text-xl w-12 h-12'></input>
        </div>
        <div className="flex items-center gap-2">
            <img className="w-5 h-5" src="https://imgs.search.brave.com/WwnXN5dTnjziORD5fsr5kYlok1n3i8IlIgZBeTTHKYM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzEyODg5NS9p/c29sYXRlZC9wcmV2/aWV3L2Y5Mjk4YjY2/M2FkMWU2NzE2ODBj/YWQyZWQ3MGIyMGMz/LXRpbWVyLXJlbG9h/ZC1mbGF0LWljb24u/cG5n"></img>
            <div>{timerr}</div>
        </div>
        <button className='cursor-pointer bg-[#d9d9d9d3]/80 hover:bg-teal-500 text-gray-900 rounded-xl w-sm h-12 text-2xl mt-7'>Verify</button>
        <div className="text-[#d9d9d98f]">Can't find the email? Click <Link to="/otp" className="text-white underline">here</Link> to resend</div>
      </div>
    </>
    )
}