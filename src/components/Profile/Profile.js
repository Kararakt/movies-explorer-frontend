import './Profile.css';

import React, { useEffect } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

export const Profile = ({ onSignOut, onUpdateUser }) => {
  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, isValid, setIsValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (event) => {
    event.preventDefault();

    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  };

  useEffect(() => {
    const { email: currentEmail, name: currentName } = currentUser;
    const { email: inputEmail, name: inputName } = values;

    if (currentEmail === inputEmail && currentName === inputName)
      setIsValid(false);
  }, [currentUser, values, setIsValid]);

  useEffect(() => {
    currentUser ? resetForm(currentUser) : resetForm();
  }, [currentUser, resetForm]);

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__input-block">
          <label className="profile__label">Имя</label>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            autoComplete="off"
            minLength={2}
            maxLength={30}
            required
            value={values.name || ''}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я\s\-]+$"
            className="profile__input"
          />
        </div>
        <div className="profile__input-block">
          <label className="profile__label">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            minLength={10}
            maxLength={50}
            required
            value={values.email || ''}
            onChange={handleChange}
            pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
            className="profile__input"
          />
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className="profile__submit-btn"
        >
          Редактировать
        </button>
      </form>
      <button type="button" onClick={onSignOut} className="profile__sign-out">
        Выйти из аккаунта
      </button>
    </main>
  );
};
