import { Link } from 'react-router-dom';
import { preload } from 'swr';
import { getSingleCocktail } from '../../../utils';
import styles from './Cocktail.module.scss';

export const Cocktail = ({ image, name, id, info, glass }) => {

  return (
    <article className={styles.cocktail}>
      <img src={image} alt={name} />
      <div className={styles['cocktail-footer']}>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link
          to={`/cocktail/${id}`}
          onMouseOver={() => preload(id, getSingleCocktail)}
          className={`${styles.btn} ${styles['btn-primary']} ${styles['btn-details']}`}
        >
          details
        </Link>
      </div>
    </article>
  );
};
