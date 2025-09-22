import { useState } from "react"

export default function Button(props){
    
    return(
        <>
        <button onClick={()=> props.setCount(prev => prev+1)}>Count: {props.count}</button>
        </>
    )
}