import { useState } from "react";


export const useHandleStorage = (id)=>{

  const favoritesStorage = JSON.parse(localStorage.getItem('favorites'));
  let favoritesList = Array.isArray(favoritesStorage) ? favoritesStorage : [];

  const [isAddedToStorage, setIsAddedToStorage] = useState(favoritesList.includes(id))

  const toggleAdded = ()=> {
    if (isAddedToStorage){
      favoritesList = favoritesList.filter(item => item !== id);
    } else {
      favoritesList = [...new Set(favoritesList.concat(id))];
    }
    localStorage.setItem('favorites', JSON.stringify(favoritesList));
    setIsAddedToStorage(prev=>!prev)
  }
  
  return { isAddedToStorage, toggleAdded, favoritesList };
};