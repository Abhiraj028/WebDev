import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props){
    return (
        <section className="suggested-recipe-container">
            {props.recipeRecieved && <h2>Chef Claude Recommends:</h2>}
        <ReactMarkdown children = {props.recipeRecieved} />
        </section>
    )
}