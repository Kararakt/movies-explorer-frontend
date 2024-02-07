import './SearchForm.css';
import search from '../../../images/search.svg';

import React from 'react';

export const SearchForm = () => {
  return (
    <form className="search-form">
      <img src={search} alt="Поиск фото" className="search-form__search" />
      <input
        type="text"
        name="search"
        placeholder="Фильм"
        autoComplete="off"
        required
        className="search-form__input"
      />
      <button
        type="submit"
        aria-label="Кнопка для поиска"
        className="search-form__button"
      ></button>
    </form>
  );
};
