import './AboutMe.css';
import me from '../../../images/me.jpg';

import React from 'react';

export const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__description">
          <h3 className="about-me__name">Денис</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__about">
            Я родился и живу в Москве, студент последнего курса МИРЭА по
            направлению "Информационная безопасность автоматизированных систем".
            Моя страсть к технологиям и непрекращающемуся обучению привела меня
            к программированию и веб-разработке. Я всегда стремлюсь улучшать
            свои навыки и учиться новому, и я готов принять вызов любого
            проекта. Моя цель - создавать безопасные, эффективные и интуитивно
            понятные веб-приложения, которые помогают людям решать их проблемы и
            улучшают их жизнь.
          </p>
          <a
            href="https://github.com/Kararakt"
            target="_blank"
            rel="noreferrer"
            className="about-me__link"
          >
            Github
          </a>
        </div>
        {/* Фото своё как будет поставить*/}
        <img src={me} alt="Моя Фото" className="about-me__image" />
      </div>
    </div>
  );
};
