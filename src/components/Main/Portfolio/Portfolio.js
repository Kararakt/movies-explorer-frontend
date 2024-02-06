import './Portfolio.css';

import React from 'react';

import { projects } from '../../../utils/constants';

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__projects">
        {projects.map((project) => (
          <li key={project.id} className="portfolio__project">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="portfolio__link"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
<li className="portfolio__project"></li>;
