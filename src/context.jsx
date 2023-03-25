import { useState, useContext, useEffect, useCallback, createContext } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);


export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const { drinks } = await response.json();
      if (drinks) {
        const newCocktails = drinks.map(item => {
          const { idDrink: id, strDrink: name, strDrinkThumb: image, strAlcoholic: info, strGlass: glass } = item;
          return { id, name, image, info, glass }
        })
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider value={{ loading, cocktails, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}
