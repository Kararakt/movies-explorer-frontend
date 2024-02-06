import './Profile.css';

import React, { useState } from 'react';

export const Profile = () => {
  const [userName, setUserName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');

  const handleChangeName = (event) => {
    setUserName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__input-block">
          <label className="profile__label">Имя</label>
          <input
            value={userName}
            onChange={handleChangeName}
            type="text"
            name="name"
            placeholder="Имя"
            autoComplete="off"
            minLength={2}
            maxLength={30}
            required
            className="profile__input"
          />
        </div>
        <div className="profile__input-block">
          <label className="profile__label">E-mail</label>
          <input
            value={email}
            onChange={handleChangeEmail}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            minLength={10}
            maxLength={50}
            required
            className="profile__input"
          />
        </div>
        <button type="submit" className="profile__submit-btn">
          Редактировать
        </button>
      </form>
      <button type="button" className="profile__sign-out">
        Выйти из аккаунта
      </button>
    </main>
  );
};
