import './SavedMovies.css';

import React from 'react';

import { moviesCards } from '../../utils/constants';

import { SearchForm } from '../Movies/SearchForm/SearchForm';
import { FilterCheckbox } from '../Movies/FilterCheckbox/FilterCheckbox';
import { MoviesCardList } from '../Movies/MoviesCardList/MoviesCardList';

export const SavedMovies = () => {
  const repeatedMovies = Array(3).fill(moviesCards).flat();
  return (
    <main className="saved-movies">
      <SearchForm />

      <FilterCheckbox name="Короткометражки" />

      <MoviesCardList movies={repeatedMovies} />
    </main>
  );
};
