import { useEffect, useRef } from "react"

export function usePrev(count){
    const prevCount = useRef()

    useEffect(() =>{
        prevCount.current = count
    },[count])

    return prevCount.current
}