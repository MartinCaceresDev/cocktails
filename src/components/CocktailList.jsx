import { Cocktail, Loading } from './';
import { useGlobalContext } from '../context'

export const CocktailList = () => {

  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (!cocktails.length) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map(item => (
          <Cocktail key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
};
