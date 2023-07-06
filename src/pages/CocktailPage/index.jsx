import { useParams, Link } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';
import { getSingleCocktail } from '../../../utils';
import { Loading } from '../../components';
import styles from './CocktailPage.module.scss';
import { useHandleStorage } from '../../hooks/useHandleStorage';


export const CocktailPage = () => {

  const { id } = useParams();
  const { data, isLoading } = useSWRImmutable(id, getSingleCocktail);
  const { isAddedToStorage, toggleAdded } = useHandleStorage(id);


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

    const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5].filter(Boolean);
    newCocktail = { name, image, info, category, glass, instructions, ingredients };
  }

  if (!newCocktail) return <h2 className={styles['cocktailPage-section-title']}>no cocktail to display</h2>;

  const { name, image, category, info, glass, instructions, ingredients } = newCocktail;
  return (
    <section className={styles['cocktail-section']}>

      <Link to='/' className={`${styles.btn} ${styles['btn-primary']}`}>back home</Link>

      <h1 className={styles['cocktailPage-section-title']}>{name}</h1>

      <div className={styles.drink}>
        <img src={image} alt={name}></img>

        <div className={styles['drink-info']}>
          {[{ name }, { category }, { info }, { glass }, { instructions }].map(data => {
            const [title, value] = Object.entries(data)[0];
            return (
              <p key={title}>
                <span className={styles['drink-data']}>{title}:</span>
                {value}
              </p>
            );
          })
          }
          <p>
            <span className={styles['drink-data']}>ingredients:</span>
            {ingredients.map((item, index) => (
              <span key={index}> {index < ingredients.length - 1 ? item + ',' : item + '.'}</span>
            ))}
          </p>
          <button
            className={`${styles.btn} ${styles['btn-primary']}`}
            onClick={toggleAdded}
          >
            {!isAddedToStorage ? 'add to favorites' : 'remove from favorites'}
          </button>
        </div>
      </div>
    </section>
  );
};
