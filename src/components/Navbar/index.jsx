import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-center']}>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className={styles.logo} />
        </Link>
        <div className={styles['nav-links']}>
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
        </div>
      </div>
    </nav>
  );
};
