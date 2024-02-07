import './MoviesCardList.css';

import React from 'react';
import { useLocation } from 'react-router-dom';

import { MoviesCard } from '../MoviesCard/MoviesCard';

export const MoviesCardList = ({ movies }) => {
  const location = useLocation().pathname;
  return (
    <section className="movies-list">
      <ul className="movies-list__cards">
        {movies.map((movie, index) => {
          return (
            <li className="movies-card" key={index}>
              <MoviesCard movie={movie} />
            </li>
          );
        })}
      </ul>
      {location !== '/saved-movies' && (
        <button type="button" className="movies-list__button">
          Ещё
        </button>
      )}
    </section>
  );
};
