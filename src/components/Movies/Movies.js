import './Movies.css';

import React, { useEffect, useState } from 'react';

import { getMovies } from '../../utils/MoviesApi';
import { findMovies, calculateMovieSettings } from '../../utils/utils';
import { errorEmpty, errorServer } from '../../utils/constants';

import { SearchForm } from './SearchForm/SearchForm';
import { MoviesCardList } from './MoviesCardList/MoviesCardList';
import { Preloader } from './Preloader/Preloader';

export const Movies = ({ savedMovies, onMovieSave, onMovieDelete }) => {
  const [movieSettings, setMovieSettings] = useState(calculateMovieSettings);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [empty, setEmpty] = useState('');

  const isButton = movies.length > movieSettings.max;

  const getLocalMovies = () => {
    return JSON.parse(localStorage.getItem('movies'));
  };

  const filterAndSetMovies = (input, checkbox) => {
    const localeMovies = getLocalMovies();
    const filteredMovies = findMovies(localeMovies, input, checkbox);

    console.log(filteredMovies);

    setEmpty(filteredMovies.length === 0 ? errorEmpty : '');

    setMovies(filteredMovies);
  };

  const handleSearch = (input, checkbox) => {
    setIsLoading(true);

    const jwt = localStorage.getItem('jwt');
    const localeMovies = getLocalMovies();

    if (jwt && !localeMovies) {
      getMovies()
        .then((res) => {
          localStorage.setItem('movies', JSON.stringify(res));

          filterAndSetMovies(input, checkbox);
        })
        .catch((error) => {
          setEmpty(errorServer);
          console.error('Ошибка получения фильмов', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filterAndSetMovies(input, checkbox);
      setIsLoading(false);
    }
  };

  const updateMovieDisplaySettings = () => {
    setMovieSettings(calculateMovieSettings());
  };

  const handleMoreMoviesClick = () => {
    setMovieSettings((prevSettings) => ({
      ...prevSettings,
      max: prevSettings.max + prevSettings.step,
    }));
  };

  const handleResize = () => {
    setTimeout(updateMovieDisplaySettings, 1000);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="movies">
      <SearchForm onSearch={handleSearch} />

      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies.slice(0, movieSettings.max)}
          savedMovies={savedMovies}
          onMovieSave={onMovieSave}
          onMovieDelete={onMovieDelete}
          empty={empty}
          onMoreClick={handleMoreMoviesClick}
          isButton={isButton}
        />
      )}
    </main>
  );
};
