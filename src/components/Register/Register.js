import './Register.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';

import { Auth } from '../Auth/Auth';

export const Register = ({ onRegister }) => {
  const { values, handleChange, errors, isValid } = useFormAndValidation({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };
  return (
    <main className="register">
      <Auth
        name="register"
        title="Добро пожаловать!"
        textButton="Зарегистрироваться"
        disabled={isValid}
        classButton="register__button"
        onSubmit={handleSubmit}
      >
        <label className="register__label">Имя</label>
        <input
          type="text"
          name="name"
          placeholder="Введите имя"
          autoComplete="off"
          minLength={2}
          maxLength={30}
          required
          pattern="^[a-zA-Zа-яА-Я\s\-]+$"
          value={values.name || ''}
          onChange={handleChange}
          className={`register__input ${
            errors.name && 'register__input_error'
          }`}
        />
        <span className="register__input-error">{errors.name}</span>
        <label className="register__label">E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          minLength={10}
          maxLength={50}
          required
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          value={values.email || ''}
          onChange={handleChange}
          className={`register__input ${
            errors.email && 'register__input_error'
          }`}
        />
        <span className="register__input-error">{errors.email}</span>
        <label className="register__label">Пароль</label>
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          autoComplete="off"
          minLength={6}
          maxLength={40}
          value={values.password || ''}
          onChange={handleChange}
          required
          className={`register__input ${
            errors.password && 'register__input_error'
          }`}
        />
        <span className="register__input-error">{errors.password}</span>
      </Auth>
      <p className="register__text">
        Уже зарегистрированы?{' '}
        <NavLink to="/signin" className="register__link">
          Войти
        </NavLink>
      </p>
    </main>
  );
};
