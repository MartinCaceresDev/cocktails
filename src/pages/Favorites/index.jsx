import useSWRImmutable from 'swr/immutable';
import { getFavCocktails } from '../../../utils';
import { Cocktail, Loading } from '../../components';
import styles from './Favorites.module.scss';

export const Favorites = () => {

  const favList = JSON.parse(localStorage.getItem('favorites')) || [];
  const { data, isLoading } = useSWRImmutable(favList, (favList) => getFavCocktails(favList));

  const cocktails = data && data.map(({ drinks }) => {
    const { idDrink: id, strDrink: name, strDrinkThumb: image, strAlcoholic: info, strGlass: glass } = drinks[0];
    return { id, name, image, info, glass };
  });

  if (isLoading) return <Loading />;

  if (!cocktails?.length) {
    return (
      <h2 className={styles['favorites-section-title']}>
        you have no favorites cocktails in your list
      </h2>
    );
  }

  return (
    <section className={styles['favorites-section']}>
      <h1 className={styles['favorites-section-title']}>your favorite cocktails</h1>
      <div className={styles['favorites-center']}>
        {cocktails.map(item => <Cocktail key={item.id} {...item} />)}
      </div>
    </section>
  );
};
