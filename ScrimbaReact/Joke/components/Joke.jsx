import { useState } from "react"

export default function Joke(props){

    const [isShown,setIsShown] = useState(false)

    function flip(){
        setIsShown(prev => !prev)
        
    }

    return (
        <div className="joke">    
            {props.setup && <h1>Setup: {props.setup}</h1>}
            {isShown && <h2>Punchline: {props.punchline}</h2>}
            <button onClick={flip}>{isShown ? "Hide Punchline":"Show Punchline"}</button>
        </div>
    )
}