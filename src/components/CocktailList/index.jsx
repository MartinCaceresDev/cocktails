import useSWRImmutable from 'swr/immutable';
import { useGlobalContext } from '../../context';
import { getCocktails } from '../../../utils';
import { Cocktail, Loading } from '..';
import styles from './CocktailList.module.scss';

export const CocktailList = () => {
  const { searchTerm } = useGlobalContext();
  const { data, isLoading } = useSWRImmutable(searchTerm, getCocktails);

  const newCocktails = data && data.drinks?.map(item => {
    const { idDrink: id, strDrink: name, strDrinkThumb: image, strAlcoholic: info, strGlass: glass } = item;
    return { id, name, image, info, glass };
  });

  if (isLoading) return <Loading />;

  if (!newCocktails?.length) {
    return (
      <h2 className={styles['cocktails-section-title']}>
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className={styles['cocktails-section']}>
      <h2 className={styles['cocktails-section-title']}>cocktails</h2>
      <div className={styles['cocktails-center']}>
        {newCocktails.map(item => <Cocktail key={item.id} {...item} />)}
      </div>
    </section>
  );
};