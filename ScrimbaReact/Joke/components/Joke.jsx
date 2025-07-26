export default function Joke(props){
    return (
        <div className="joke">    
            {props.setup && <h1>Setup: {props.setup}</h1>}
            <h2>Punchline: {props.punchline}</h2>
        </div>
    )
}