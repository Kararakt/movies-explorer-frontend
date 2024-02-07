import './Techs.css';

import React from 'react';

import { technologies } from '../../../utils/constants';

export const Techs = () => {
  return (
    <div className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__items">
        {technologies.map((item) => (
          <li key={item.id} className="techs__item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
