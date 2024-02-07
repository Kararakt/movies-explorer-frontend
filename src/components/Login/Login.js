import './Login.css';

import React from 'react';

import { NavLink } from 'react-router-dom';

import { Auth } from '../Auth/Auth';

export const Login = () => {
  return (
    <main className="login">
      <Auth
        name="login"
        title="Рады видеть!"
        textButton="Войти"
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
          className="login__input"
        />
        <span className="login__input-error"></span>
        <label className="login__label">Пароль</label>
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          autoComplete="off"
          minLength={6}
          maxLength={40}
          required
          className="login__input"
        />
        <span className="login__input-error"></span>
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
