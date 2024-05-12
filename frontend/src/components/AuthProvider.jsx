import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../contexts/AuthContext.jsx'
import routes from '../utils/routes'

/* eslint-disable react/prop-types */
const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const getUser = JSON.parse(localStorage.getItem('userInfo'));
    const [token, setToken] = useState(getUser ?? null);
  
    const logIn = useCallback((response) => {
      const data = JSON.stringify(response.data);
      localStorage.setItem('userInfo', data);
      setToken(data);
      navigate(routes.homePagePath());
      console.log('logIn');
    }, [navigate]);
    
    const logOut = useCallback(() => {
      localStorage.removeItem('userInfo');
      setToken(null);

      navigate(routes.loginPathWithoutToken());
      console.log('logOut')
    }, []);
  
  const context = useMemo(() => ({
    token,
    setToken,
    logIn,
    logOut,
  }), [token, setToken, logIn, logOut]);
  
    return (
      <AuthContext.Provider value={context}>
        {children}
      </AuthContext.Provider>
    );
  };

  export default AuthProvider;