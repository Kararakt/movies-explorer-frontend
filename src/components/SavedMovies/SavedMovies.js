import './SavedMovies.css';

import React, { useEffect, useState } from 'react';

import { findMovies } from '../../utils/utils';
import { errorSavedMoviesEmpty, errorEmpty } from '../../utils/constants';

import { SearchForm } from '../Movies/SearchForm/SearchForm';
import { MoviesCardList } from '../Movies/MoviesCardList/MoviesCardList';
import { Preloader } from '../Movies/Preloader/Preloader';

export const SavedMovies = ({ isLoading, savedMovies, onMovieDelete }) => {
  const [movies, setMovies] = useState([]);
  const [empty, setEmpty] = useState('');

  const handleSearch = (input, checkbox) => {
    const filteredMovies = findMovies(savedMovies, input, checkbox);

    console.log(filteredMovies);

    setEmpty(filteredMovies.length === 0 ? errorEmpty : '');

    setMovies(filteredMovies);
  };

  useEffect(() => {
    setMovies(savedMovies);

    setEmpty(savedMovies.length === 0 ? errorSavedMoviesEmpty : '');
  }, [savedMovies]);
  return (
    <main className="saved-movies">
      <SearchForm onSearch={handleSearch} />

      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          onMovieDelete={onMovieDelete}
          empty={empty}
        />
      )}
    </main>
  );
};
