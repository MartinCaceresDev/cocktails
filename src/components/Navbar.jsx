import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <div className='nav-links'>
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
        </div>
      </div>
    </nav>
  )
};
