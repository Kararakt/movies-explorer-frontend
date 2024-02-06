import './AboutProject.css';

import React from 'react';

import { aboutBlocks } from '../../../utils/constants';

export const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__blocks">
        {aboutBlocks.map((block) => {
          return (
            <li key={block.id} className="about-project__block">
              <h3 className="about-project__block-title">{block.title}</h3>
              <p className="about-project__block-text">{block.text}</p>
            </li>
          );
        })}
      </ul>
      <div className="about-project__bar">
        <p className="about-project__time">1 неделя</p>
        <p className="about-project__time about-project__time_type_frontend">
          4 неделя
        </p>
        <span className="about-project__bar-name">Back-end</span>
        <span className="about-project__bar-name">Front-end</span>
      </div>
    </section>
  );
};
