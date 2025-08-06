import { useState } from "react"

export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const [ingredient , setIngredients] = useState([])
    
    function onSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev , newIngredient])
    }

    const ingredientElements = ingredient.map(ingredient => <li>{ingredient}</li>)
    
    return (
        <main className='main'>
            <form action={onSubmit} className="form">
                <input type="text" className="input" placeholder="Add ingredients" name="ingredient" />
                <button  className="button">+ Add ingredient</button>
            </form>
            {console.log(ingredientElements)}
            {( ingredientElements.length > 0 && <h1 className="ingredients-heading">Ingredients we have:</h1>)}
            <ul className="ingredients-list">
                {ingredientElements}
            </ul>

            {ingredient.length > 3 && <div className="bottomContainer">
                <div className="bottomLeft">
                    <h3>Ready for a recipe?</h3>
                    <h5>Generate a recipe from your list of ingredients</h5>
                </div>
                <div className="bottomRight">
                    <button className="getRecipeButton">Get a recipe</button>
                </div>
            </div>}
        </main>
    )
}

