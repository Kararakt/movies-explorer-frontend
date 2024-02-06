import './App.css';

import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import { NotFound } from '../NotFound/NotFound';

export const App = () => {
  const location = useLocation().pathname;
  const [loggedIn, setLoggedIn] = useState(true);

  const excludedPathsForHeader = ['/signin', '/signup', '/404'];
  const excludedPathsForFooter = ['/signin', '/signup', '/404', '/profile'];

  return (
    <div className="app">
      {!excludedPathsForHeader.includes(location) && (
        <Header loggedIn={loggedIn} />
      )}

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/saved-movies" element={<SavedMovies />} />

        <Route path="/signin" element={<Login />} />

        <Route path="/signup" element={<Register />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      {!excludedPathsForFooter.includes(location) && <Footer />}
    </div>
  );
};
