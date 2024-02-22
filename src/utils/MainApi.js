import { checkResponse } from '../utils/utils';

const BASE_URL = 'https://api.kararaktus.nomoredomainsmonster.ru';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};

export const authorize = (email, password) => {
  return request(`${BASE_URL}/signin`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password }),
  });
};

export const register = (name, email, password) => {
  return request(`${BASE_URL}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ name, email, password }),
  });
};

export const getUserInfo = () => {
  return request(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      ...headers,
    },
  });
};

export const getSavedMovies = () => {
  return request(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      ...headers,
    },
  });
};

export const editUserProfile = (name, email) => {
  return request(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      ...headers,
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });
};

export const saveMovies = (movie) => {
  return request(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      ...headers,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  });
};

export const deleteMovies = (movieId) => {
  return request(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      ...headers,
    },
  });
};
