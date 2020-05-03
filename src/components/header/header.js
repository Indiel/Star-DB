import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav d-flex">
        <h3>
          <Link to="/">Star DB</Link>
        </h3>
        <ul className="nav__list d-flex">
          <li className="nav__item">
            <Link to="/people/">People</Link>
          </li>
          <li className="nav__item">
            <Link to="/planets/">Planets</Link>
          </li> 
          <li className="nav__item">
            <Link to="/starships/">Starships</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
