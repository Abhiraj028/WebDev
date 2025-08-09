export default function IngredientsList(props){
    
    const ingredientElements = props.ingredient.map(ingredient => <li>{ingredient}</li>)

    return (
        <>
        {ingredientElements.length > 0 && 
            
            <section>
            <h1 className="ingredients-heading">Ingredients we have:</h1>
            <ul className="ingredients-list">
            {ingredientElements}
            </ul>
        </section>}
        </>
        
    )
}