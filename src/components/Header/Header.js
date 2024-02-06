import './Header.css';
import logo from '../../images/logo.svg';

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Navigation } from '../Navigation/Navigation';

export const Header = ({ loggedIn }) => {
  const location = useLocation().pathname;

  const isLanding = location === '/' ? 'header_type_landing' : '';

  return (
    <header className={`header ${isLanding}`}>
      <NavLink to="/">
        <img src={logo} alt="Лого" className="header__logo" />
      </NavLink>
      {loggedIn ? (
        <Navigation />
      ) : (
        <ul className="header__auth">
          <li>
            <NavLink to="/signup" className="header__link">
              Регистрация
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className="header__link header__link_type_sign-in"
            >
              Войти
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};
