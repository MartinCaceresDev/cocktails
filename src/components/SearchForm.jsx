import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';


export const SearchForm = () => {

  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, [])

  const handleSubmit = (e) => e.preventDefault();

  return (
    <section className='search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </section>
  )
};
