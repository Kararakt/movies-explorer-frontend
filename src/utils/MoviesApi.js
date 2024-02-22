import { checkResponse } from './utils';

export const getMovies = () => {
  return fetch('https://api.nomoreparties.co/beatfilm-movies').then(
    checkResponse
  );
};
