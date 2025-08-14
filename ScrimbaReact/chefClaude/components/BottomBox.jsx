export default function BottomBox(props){

    return(
        <>
            {props.ingredient.length > 3 && <div className="bottomContainer">
                <div className="bottomLeft" ref={props.ref}>
                    <h3>Ready for a recipe?</h3>
                    <h5>Generate a recipe from your list of ingredients</h5>
                </div>
                <div className="bottomRight">
                    <button onClick={async () => {
                        props.setRecipeRecieved(await props.renderRecipe(props.ingredient))
                    }} className="getRecipeButton">Get a recipe</button>
                </div>
            </div>}
        </>
            
    )
}