import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../slices/appSlice.js';
import { ROUTES } from '../utils/router';
import AuthContext from '../contexts/AuthContext.jsx';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logIn = useCallback((token, nickname) => {
    localStorage.setItem('token', token);
    localStorage.setItem('nickname', nickname);
    dispatch(setUserData({ username: nickname, token }));
    setLoggedIn(true);
    console.log('logIn');
  }, [dispatch]);

  const logOut = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
    dispatch(setUserData({ nickname: '', token: null }));
    navigate(ROUTES.home);
    setLoggedIn(false);
    console.log('logOut');
  }, [dispatch]);

  const context = useMemo(() => ({
    logIn,
    logOut,
    loggedIn,
  }), [logIn, logOut, loggedIn]);

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
