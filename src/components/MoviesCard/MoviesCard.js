import './MoviesCard.css';

import React from 'react';
import { useLocation } from 'react-router-dom';

import { convertMinutesToHours } from '../../utils/utils';

export const MoviesCard = ({
  movie,
  savedMovies,
  onMovieSave,
  onMovieDelete,
}) => {
  const { pathname } = useLocation();

  const isSaved = savedMovies.some((i) => i.movieId === movie.id);

  const handleMovieSave = () => {
    isSaved ? onMovieDelete(movie) : onMovieSave(movie);
  };

  const handleMovieDelete = () => {
    onMovieDelete(movie);
  };

  return (
    <>
      <div className="movies-card__container">
        <h2 className="movies-card__name">{movie.nameRU}</h2>
        <span className="movies-card__duration">
          {convertMinutesToHours(movie.duration)}
        </span>
        {pathname === '/movies' && (
          <button
            type="button"
            aria-label="Добавление в избранное"
            onClick={handleMovieSave}
            className={`movies-card__button ${
              isSaved ? 'movies-card__button_active' : ''
            }`}
          ></button>
        )}
        {pathname === '/saved-movies' && (
          <button
            onClick={handleMovieDelete}
            className="movies-card__button movies-card__button_type_delete"
          ></button>
        )}
      </div>
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies-card__link"
      >
        <img
          src={
            movie.image.url
              ? `https://api.nomoreparties.co/${movie.image.url}`
              : movie.image
          }
          alt={`Фото ${movie.nameRu}`}
          className="movies-card__image"
        />
      </a>
    </>
  );
};
