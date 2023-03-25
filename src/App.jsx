import { Route, Routes } from 'react-router-dom';
import { About, Error, Home, SingleCocktail } from './pages';
import { Navbar } from './components';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
