import { cocktailsBySearchTermBaseURL } from "./urls";

export const getCocktails = async (searchTerm) => {
  const res = await fetch(`${cocktailsBySearchTermBaseURL}${searchTerm}`)
  return res.json();
};
