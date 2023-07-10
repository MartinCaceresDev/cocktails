import { singleCocktailBaseURL } from "./urls";

export const getSingleCocktail = async (id)=>{
  const res = await fetch(`${singleCocktailBaseURL}${id}`);
  return res.json();
};