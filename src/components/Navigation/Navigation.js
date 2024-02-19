import './Navigation.css';
import profile from '../../images/profile-icon.svg';

import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { headerLinks } from '../../utils/constants';

export const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  const { pathname } = useLocation();

  const isLanding = pathname !== '/' ? '' : 'navigation__link_type_landing';
  const isLandingProfile =
    pathname !== '/' ? '' : 'navigation__image_type_landing';
  const isLandingText = pathname !== '/' ? '' : 'navigation__text_type_landing';

  const handleOpenMenu = () => setMenuActive(!menuActive);

  const handleCloseMenu = () => {
    if (menuActive) {
      setMenuActive(false);
      console.log('close!');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuActive(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuActive) {
      document.body.classList.add('page_scroll');
    } else {
      document.body.classList.remove('page_scroll');
    }
  }, [menuActive]);
  return (
    <>
      <div
        onClick={handleCloseMenu}
        className={`navigation ${menuActive && 'navigation_active'}`}
      >
        <nav
          onClick={(event) => event.stopPropagation()}
          className="navigation__menu"
        >
          <ul className="navigation__links">
            {headerLinks.map((link) => {
              return (
                <li key={link.id} className="navigation__item">
                  <NavLink
                    to={link.to}
                    onClick={handleCloseMenu}
                    className={`navigation__link ${isLanding}`}
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <NavLink
            to="/profile"
            onClick={handleCloseMenu}
            className="navigation__profile"
          >
            <span className={`navigation__text ${isLandingText}`}>Аккаунт</span>
            <img
              src={profile}
              alt="Фото профиля"
              className={`navigation__image ${isLandingProfile}`}
            />
          </NavLink>
        </nav>
      </div>
      <button
        type="button"
        onClick={handleOpenMenu}
        className={`navigation__icon ${
          menuActive && 'navigation__icon_active'
        }`}
      ></button>
    </>
  );
};
