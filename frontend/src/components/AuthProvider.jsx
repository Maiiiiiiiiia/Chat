import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../contexts/AuthContext.jsx'
import routes from '../utils/routes'
import { 
  // useDispatch, 
  useSelector
 } from 'react-redux';

// import useAuth from '../hooks/index.jsx';
// import { useLocation } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// // import { Link } from 'react-router-dom';

// const AuthButton = () => {
//     const auth = useAuth();
//     const location = useLocation();

//     return (
//       auth.token
//       ? <Button onClick={auth.logOut} state={{ from: location }} >Выйти</Button>
//       : null
//     );
//   };

//   export default AuthButton;
  
/* eslint-disable react/prop-types */
const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const app = useSelector((state => state.app));
    console.log(app);
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