import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN;
const client = new InferenceClient(HF_TOKEN);

export async function getRecipeFromMistral(ingredientsArr) {
  if (!client) {
    console.error("Hugging Face client failed to initialize.");
    return null;
  }

  if (!Array.isArray(ingredientsArr) || ingredientsArr.length === 0) {
    console.error("Ingredients array is empty.");
    return null; 
  }

  const ingredientsString = ingredientsArr.join(", ");
  const userPrompt = `Using only these ingredients: ${ingredientsString}, please create a delicious recipe. Include a creative name for the dish and a short, enticing description.`;
  const systemPrompt = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`;

  try {
    console.log("Sending request to Hugging Face with ingredients:", ingredientsString);

    const response = await client.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 1024,
    });

    console.log("Full response from HF:", response);

    return response.choices[0].message.content;

  } catch (err) {
    console.error("Hugging Face API request failed:", err);
    return null;
  }
}
