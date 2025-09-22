import { useRef, useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import BottomBox from "./BottomBox"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai" 
import { useEffect } from "react"

export default function Main() {

    const [ingredient , setIngredients] = useState([])

    const [recipeRecieved,setRecipeRecieved] = useState("")

    const recipeScroll = useRef(null)

    useEffect(() =>{
        if(recipeRecieved != ""){
            recipeScroll.current.scrollIntoView({behavior:"smooth"})
        }

    },[recipeRecieved,recipeScroll])
    
    function onSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev , newIngredient])
    }

    function showRecipe(){
        setRecipeRecieved(prev => !prev)
    }

    return (
        <main className='main'>
            <form action={onSubmit} className="form">
                <input type="text" className="input" placeholder="Add ingredients" name="ingredient" />
                <button  className="button">+ Add ingredient</button>
            </form>
            
            <IngredientsList ingredient={ingredient}/>

            <BottomBox ref={recipeScroll} renderRecipe={getRecipeFromMistral} ingredient = {ingredient} setRecipeRecieved = {setRecipeRecieved}/>

            <ClaudeRecipe recipeRecieved={recipeRecieved}/>

        </main>
    )
}

