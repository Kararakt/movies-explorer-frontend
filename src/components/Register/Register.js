import './Register.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

import { Auth } from '../Auth/Auth';

export const Register = () => {
  return (
    <main className="register">
      <Auth
        name="register"
        title="Добро пожаловать!"
        textButton="Зарегистрироваться"
        classButton="register__button"
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
          className="register__input"
        />
        <span className="register__input-error"></span>
        <label className="register__label">E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          minLength={10}
          maxLength={50}
          required
          className="register__input"
        />
        <span className="register__input-error"></span>
        <label className="register__label">Пароль</label>
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          autoComplete="off"
          minLength={6}
          maxLength={40}
          required
          className="register__input"
        />
        <span className="register__input-error"></span>
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
