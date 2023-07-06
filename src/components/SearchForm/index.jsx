import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../../context';
import styles from './SearchForm.module.scss';


export const SearchForm = () => {

  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <section className={styles.search}>
      <form className={styles['search-form']} onSubmit={handleSubmit}>
        <div className={styles['form-control']}>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={e => setSearchTerm(e.target.value)}
            autoComplete='off'
          />
        </div>
      </form>
    </section>
  );
};
