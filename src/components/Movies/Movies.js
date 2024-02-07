import './Movies.css';

import React from 'react';

import { moviesCards } from '../../utils/constants';

import { SearchForm } from './SearchForm/SearchForm';
import { FilterCheckbox } from './FilterCheckbox/FilterCheckbox';
import { MoviesCardList } from './MoviesCardList/MoviesCardList';

export const Movies = () => {
  const repeatedMovies = Array(12).fill(moviesCards).flat();
  return (
    <main className="movies">
      <SearchForm />

      <FilterCheckbox name="Короткометражки" />

      <MoviesCardList movies={repeatedMovies} />
    </main>
  );
};
