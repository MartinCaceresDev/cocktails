import { singleCocktailBaseURL } from "./urls";

/**
 * 
 * @param {String} id - Receives an id (string) of the chosen cocktail to make the query.
 * @returns If query is successfull returns a single cocktail object with these properties: name, image, info, category, glass, instructions and ingredients.
 */

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