import './Login.css';

import React from 'react';

import { NavLink } from 'react-router-dom';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';

import { Auth } from '../Auth/Auth';

export const Login = ({ onLogin }) => {
  const { values, handleChange, errors, isValid } = useFormAndValidation({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    onLogin({ email: values.email, password: values.password });
  };
  return (
    <main className="login">
      <Auth
        name="login"
        title="Рады видеть!"
        textButton="Войти"
        disabled={isValid}
        onSubmit={handleSubmit}
        classButton="login__button"
      >
        <label className="login__label">E-mail</label>
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
          className={`login__input ${errors.email && 'login__input_error'}`}
        />
        <span className="login__input-error">{errors.email}</span>
        <label className="login__label">Пароль</label>
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          autoComplete="off"
          minLength={6}
          maxLength={40}
          required
          value={values.password || ''}
          onChange={handleChange}
          className={`login__input ${errors.password && 'login__input_error'}`}
        />
        <span className="login__input-error">{errors.password}</span>
      </Auth>
      <p className="login__text">
        Ещё не зарегистрированы?{' '}
        <NavLink to="/signup" className="login__link">
          Регистрация
        </NavLink>
      </p>
    </main>
  );
};
