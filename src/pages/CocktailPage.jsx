import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSingleCocktail } from '../../utils/getSingleCocktail';
import { Loading } from '../components';


export const CocktailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const getCocktail = async () => {
    // Query for single cocktail data and updates component state.
    const newCocktail = await getSingleCocktail(id);
    setCocktail(newCocktail);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className='cocktailPage-section-title'>no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } = cocktail;
    return (
      <section className='cocktail-section'>

        <Link to='/' className='btn btn-primary'>back home</Link>

        <h2 className='cocktailPage-section-title'>{name}</h2>

        <div className='drink'>
          <img src={image} alt={name}></img>

          <div className='drink-info'>
            <p>
              <span className='drink-data'>name:</span>
              {name}
            </p>
            <p>
              <span className='drink-data'>category:</span>
              {category}
            </p>
            <p>
              <span className='drink-data'>info:</span>
              {info}
            </p>
            <p>
              <span className='drink-data'>glass:</span>
              {glass}
            </p>
            <p>
              <span className='drink-data'>instructons:</span>
              {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients:</span>
              {ingredients.map((item, index) => (
                item ? <span key={index}> {item}</span> : null
              ))}
            </p>
          </div>
        </div>
      </section>
    )
  }
};
