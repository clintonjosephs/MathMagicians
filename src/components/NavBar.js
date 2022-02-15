import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from './calculator.svg';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <nav className={styles.navBar}>
      <h2>
        <img src={logo} alt="Logo" style={{ width: '20px' }} />
        {' '}
        Math-Magicians
      </h2>
      <ul>
        {links.map(({ id, path, text }) => (
          <li key={id}>
            <NavLink
              to={path}
              className="link"
              style={({ isActive }) => ({
                textDecoration: 'none',
                margin: '0 10px',
                borderBottom: isActive ? 'solid 5px #f5913e' : '',
                color: isActive ? '#f5913e' : 'black',
              })}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
