import './InfoTooltip.css';
import confirm from '../../images/confirm-register.svg';
import error from '../../images/error-register.svg';

import React, { useEffect } from 'react';
import { useClosePopupByEsc } from '../../hooks/useClosePopupByEsc';

export const InfoTooltip = ({ isOpen, onClose, messageImage, messageText }) => {
  useClosePopupByEsc(isOpen, onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('page_scroll');
    } else {
      document.body.classList.remove('page_scroll');
    }
  }, [isOpen]);
  return (
    <section
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      onClick={onClose}
    >
      <div
        className="popup__container"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Закрытие окна"
          className="popup__close"
          onClick={onClose}
        ></button>
        <img
          src={messageImage ? confirm : error}
          alt="Фото состояния входа"
          className="popup__image"
        />
        <h2 className="popup__title">{messageText}</h2>
      </div>
    </section>
  );
};
