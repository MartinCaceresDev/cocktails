import { useParams, Link } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';
import { getSingleCocktail } from '../../utils';
import { Loading } from '../components';

export const CocktailPage = () => {

  const { id } = useParams();
  const { data, isLoading } = useSWRImmutable(id, getSingleCocktail);

  if (isLoading) return <Loading />;

  let newCocktail;
  if (data?.drinks[0]) {
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
    newCocktail = { name, image, info, category, glass, instructions, ingredients };
  }

  if (!newCocktail) return <h2 className='cocktailPage-section-title'>no cocktail to display</h2>;

  const { name, image, category, info, glass, instructions, ingredients } = newCocktail;
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
  );
};
