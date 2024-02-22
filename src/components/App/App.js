import './App.css';

import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom';

import {
  authorize,
  register,
  getUserInfo,
  getSavedMovies,
  editUserProfile,
  saveMovies,
  deleteMovies,
} from '../../utils/MainApi';

import { errorMessage } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import { NotFound } from '../NotFound/NotFound';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [savedMovies, setSavedMovies] = useState([]);

  const [messageImage, setMessageImage] = useState(null);
  const [messageText, setMessageText] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isPopup, setIsPopup] = useState(false);

  const excludedPathsForHeader = ['/signin', '/signup', '/404'];
  const excludedPathsForFooter = ['/signin', '/signup', '/404', '/profile'];

  const jwt = localStorage.getItem('jwt');

  const handleClosePopup = () => {
    setIsPopup(false);
  };

  const onLogin = ({ email, password }) => {
    return authorize(email, password)
      .then((res) => {
        if (!res) throw new Error('Неправильные имя пользователя или пароль');

        if (res) {
          setLoggedIn(true);
          localStorage.setItem('jwt', res.token);
          navigate('/movies');
        }
      })
      .catch((error) => {
        setIsPopup(true);
        setMessageImage(false);
        setMessageText(errorMessage);
        console.error('Ошибка входа', error);
      });
  };

  const onRegister = ({ name, email, password }) => {
    return register(name, email, password)
      .then((res) => {
        if (!res || res.statusCode === 400)
          throw new Error('Что-то пошло не так');

        if (res) {
          setIsPopup(true);
          setMessageImage(true);
          setMessageText('Вы успешно зарегистрировались!');
          onLogin({ email, password });
        }
      })
      .catch((error) => {
        setIsPopup(true);
        setMessageImage(false);
        setMessageText(errorMessage);
        console.error('Ошибка регистрации', error);
      });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/');
  };

  const handleUpdateUser = (user) => {
    editUserProfile(user.name, user.email)
      .then((res) => {
        setIsPopup(true);
        setCurrentUser(res);
        setMessageImage(true);
        setMessageText('Обновление профиля произошло успешно!');
      })
      .catch((err) => {
        setIsPopup(true);
        setMessageImage(false);
        setMessageText('Произошла ошибка обновления профиля');
        console.log('Ошибка обновления профиля', err);
      });
  };

  const handleMovieSave = (movie) => {
    saveMovies(movie)
      .then((newMovie) => {
        setSavedMovies((state) => [newMovie, ...state]);
      })
      .catch((error) => {
        console.error('Ошибка добавления фильма', error);
      });
  };

  const handleMovieDelete = (movie) => {
    const isSavedMovie = pathname === '/saved-movies';
    const movieId = isSavedMovie
      ? movie._id
      : savedMovies.find((c) => c.movieId === movie.id)._id;
    const idInMovieList = isSavedMovie ? movie.movieId : movie.id;

    deleteMovies(movieId)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((c) => c.movieId !== idInMovieList)
        );
      })
      .catch((error) => {
        console.error('Произошла ошибка удаления карточки', error);
      });
  };

  useEffect(() => {
    if (jwt) {
      setIsLoading(true);

      Promise.all([getUserInfo(), getSavedMovies()])
        .then(([user, savedMovies]) => {
          setCurrentUser(user);
          setSavedMovies(savedMovies);
          setLoggedIn(true);
          navigate(pathname);
        })
        .catch((error) => {
          console.error(
            'Ошибка получения данных пользователя или сохраненный фильмов',
            error
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [jwt]);

  useEffect(() => {
    if (loggedIn && (pathname === '/signin' || pathname === '/signup')) {
      navigate('/movies');
    }
  }, [loggedIn, navigate, pathname]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {!excludedPathsForHeader.includes(pathname) && (
          <Header loggedIn={loggedIn} />
        )}

        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={Movies}
                savedMovies={savedMovies}
                onMovieSave={handleMovieSave}
                onMovieDelete={handleMovieDelete}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={SavedMovies}
                isLoading={isLoading}
                savedMovies={savedMovies}
                onMovieDelete={handleMovieDelete}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={Profile}
                onSignOut={handleSignOut}
                onUpdateUser={handleUpdateUser}
              />
            }
          />

          {!loggedIn && (
            <>
              <Route path="/signin" element={<Login onLogin={onLogin} />} />
              <Route
                path="/signup"
                element={<Register onRegister={onRegister} />}
              />
            </>
          )}

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>

        {!excludedPathsForFooter.includes(pathname) && <Footer />}

        <InfoTooltip
          messageImage={messageImage}
          messageText={messageText}
          isOpen={isPopup}
          onClose={handleClosePopup}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};
