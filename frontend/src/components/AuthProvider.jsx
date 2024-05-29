import React, { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../slices/appSlice.js';
import AuthContext from '../contexts/AuthContext.jsx';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const logIn = useCallback((token, nickname) => {
    localStorage.setItem('token', token);
    localStorage.setItem('nickname', nickname);
    dispatch(setUserData({ username: nickname, token }));
    setLoggedIn(true);
    console.log(nickname, 'logIn');
  }, [dispatch]);

  const logOut = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
    dispatch(setUserData({ nickname: '', token: null }));
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
