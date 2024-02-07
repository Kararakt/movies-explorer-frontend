import './Footer.css';

import React from 'react';

import { footerLinks } from '../../utils/constants';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <span className="footer__copyright">&#169; {year}</span>
        <ul className="footer__links">
          {footerLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
