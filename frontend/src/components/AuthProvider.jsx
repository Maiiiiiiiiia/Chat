import React, { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../slices/appSlice.js';
import AuthContext from '../contexts/AuthContext.jsx';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const logIn = useCallback((token, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('nickname', username);
    dispatch(setUserData({ username, token }));
    setLoggedIn(true);
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
