import { singleCocktailBaseURL } from "./urls";

export const getFavCocktails = async (idsArray)=>{

  const favs = await Promise.all(idsArray.map(async (id)=>{
    const res = await fetch(`${singleCocktailBaseURL}${id}`)
    return await res.json()
  }))

  return favs;
};