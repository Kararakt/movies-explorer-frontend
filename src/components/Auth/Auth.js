import './Auth.css';
import logo from '../../images/logo.svg';

import React from 'react';
import { NavLink } from 'react-router-dom';

export const Auth = ({
  title,
  name,
  children,
  onSubmit,
  textButton,
  classButton,
  disabled = true,
}) => {
  return (
    <div className="authorization">
      <NavLink to="/" className="authorization__link">
        <img src={logo} alt="Лого" className="authorization__logo" />
      </NavLink>
      <h1 className="authorization__title">{title}</h1>
      <form
        name={name}
        noValidate
        onSubmit={onSubmit}
        className="authorization__form"
      >
        {children}
        <button
          type="submit"
          disabled={!disabled}
          className={`authorization__button ${classButton}`}
        >
          {textButton}
        </button>
      </form>
    </div>
  );
};
