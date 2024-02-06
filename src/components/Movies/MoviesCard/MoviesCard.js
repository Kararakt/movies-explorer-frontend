import './MoviesCard.css';

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { convertMinutesToHours } from '../../../utils/utils';

export const MoviesCard = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation().pathname;

  const handleFavoriteClick = () => {
    isLiked ? setIsLiked(false) : setIsLiked(true);
  };
  return (
    <>
      <div className="movies-card__container">
        <h2 className="movies-card__name">{movie.nameRu}</h2>
        <span className="movies-card__duration">
          {convertMinutesToHours(movie.duration)}
        </span>
        {location === '/movies' && (
          <button
            type="button"
            onClick={handleFavoriteClick}
            aria-label="Добавление в избранное"
            className={`movies-card__button ${
              isLiked ? 'movies-card__button_active' : ''
            }`}
          ></button>
        )}
        {location === '/saved-movies' && (
          <button className="movies-card__button movies-card__button_type_delete"></button>
        )}
      </div>
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies-card__link"
      >
        <img
          src={movie.image}
          alt={`Фото ${movie.nameRu}`}
          className="movies-card__image"
        />
      </a>
    </>
  );
};
