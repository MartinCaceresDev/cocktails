import { Link } from 'react-router-dom';
import { preload } from 'swr';
import { getFavCocktails } from '../../../utils';
import logo from '../../logo.svg';
import styles from './Navbar.module.scss';

export const Navbar = () => {

  const preFetchFavs = () => {
    const favList = JSON.parse(localStorage.getItem('favorites')) || [];
    preload(favList, (favList) => getFavCocktails(favList));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-center']}>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className={styles.logo} />
        </Link>
        <div
          className={styles['nav-links']}
          onMouseOver={preFetchFavs}
        >
          <Link to='/'>home</Link>
          <Link to='/favorites'>favorites</Link>
        </div>
      </div>
    </nav>
  );
};
