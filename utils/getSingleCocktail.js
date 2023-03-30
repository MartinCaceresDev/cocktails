import { singleCocktailBaseURL } from "./urls";

export const getSingleCocktail = async (id)=>{
  try {
    const response = await fetch(`${singleCocktailBaseURL}${id}`);
    const data = await response.json();
    if (data.drinks) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = data.drinks[0];
      const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
      const newCocktail = { name, image, info, category, glass, instructions, ingredients };
      return newCocktail;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};