import { useState, useContext, useEffect, createContext } from 'react';
import { cocktailsBySearchTermBaseURL } from '../utils/urls';

export const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);


export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('a');

  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
