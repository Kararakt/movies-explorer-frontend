import './Promo.css';
import promo from '../../../images/promo-web.svg';

import React from 'react';

export const Promo = () => {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <p className="promo__text">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <a href="#about-project" className="promo__link">
        Узнать больше
      </a>

      <img src={promo} alt="Фото web" className="promo__image" />
    </section>
  );
};
