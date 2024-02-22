import './MoviesCardList.css';

import React from 'react';
import { useLocation } from 'react-router-dom';

import { MoviesCard } from '../MoviesCard/MoviesCard';

export const MoviesCardList = ({
  movies,
  savedMovies,
  onMovieSave,
  onMovieDelete,
  empty,
  onMoreClick,
  isButton,
}) => {
  const { pathname } = useLocation();

  return (
    <section className="movies-list">
      {empty ? (
        <span className="movies-list__empty">{empty}</span>
      ) : (
        <>
          <ul className="movies-list__cards">
            {movies.map((movie) => {
              return (
                <li key={movie.id || movie.movieId} className="movies-card">
                  <MoviesCard
                    movie={movie}
                    savedMovies={savedMovies}
                    onMovieSave={onMovieSave}
                    onMovieDelete={onMovieDelete}
                  />
                </li>
              );
            })}
          </ul>
          {isButton && pathname !== '/saved-movies' && (
            <button
              type="button"
              onClick={onMoreClick}
              className="movies-list__button"
            >
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
};
