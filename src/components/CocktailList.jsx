import useSWRImmutable from 'swr/immutable';
import { useGlobalContext } from '../context';
import { getCocktails } from '../../utils';
import { Cocktail, Loading } from './';

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
      <h2 className='cocktails-section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className='cocktails-section'>
      <h2 className='cocktails-section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {newCocktails.map(item => <Cocktail key={item.id} {...item} />)}
      </div>
    </section>
  );
};
