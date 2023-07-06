import { Route, Routes } from 'react-router-dom';
import { Favorites, Error, Home, CocktailPage } from './pages';
import { Navbar } from './components';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='cocktail/:id' element={<CocktailPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
