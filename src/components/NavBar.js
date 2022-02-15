import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Welcome',
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
      <h2>Math Magicians</h2>
      <ul>
        {links.map(({ id, path, text }) => (
          <li key={id}>
            <NavLink
              to={path}
              className="link"
              style={({ isActive }) => ({
                textDecoration: 'none',
                margin: '0 10px',
                borderBottom: isActive ? 'solid 5px orange' : '',
                color: isActive ? 'orange' : 'black',
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
