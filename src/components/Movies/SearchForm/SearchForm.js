import './SearchForm.css';
import search from '../../../images/search.svg';

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

export const SearchForm = ({ onSearch }) => {
  const { pathname } = useLocation();

  const [input, setInput] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const isMoviesPath = () => pathname === '/movies';

  const handleInputChange = ({ target: { value } }) => setInput(value);

  const handleCheckboxChange = () => {
    if (isMoviesPath()) localStorage.setItem('checkbox', !checkbox);

    setCheckbox(!checkbox);
    onSearch(input, !checkbox);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input !== '') {
      onSearch(input, checkbox);
    }

    if (isMoviesPath()) localStorage.setItem('input', input);
  };

  useEffect(() => {
    if (!isMoviesPath()) return;

    const localeInput = localStorage.getItem('input') || '';
    const localeCheckBox = localStorage.getItem('checkbox') === 'true';

    console.log(localeInput);
    console.log(localeCheckBox);

    setInput(localeInput);
    setCheckbox(localeCheckBox);

    if (localeInput || localeCheckBox) {
      onSearch(localeInput, localeCheckBox);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <img src={search} alt="Поиск фото" className="search-form__search" />
        <input
          type="text"
          name="search"
          placeholder="Фильм"
          autoComplete="off"
          minLength={1}
          maxLength={80}
          required
          value={input}
          onChange={handleInputChange}
          className="search-form__input"
        />
        <button
          type="submit"
          aria-label="Кнопка для поиска"
          className="search-form__button"
        ></button>
      </form>
      <FilterCheckbox
        name="Короткометражки"
        checkbox={checkbox}
        handleCheckbox={handleCheckboxChange}
      />
    </>
  );
};
