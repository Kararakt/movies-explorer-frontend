import './NotFound.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-2);
  };
  return (
    <main className="not-found">
      <div>
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button type="button" onClick={goBack} className="not-found__back">
        Назад
      </button>
    </main>
  );
};
