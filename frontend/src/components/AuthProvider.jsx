import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../slices/appSlice.js';
import { ROUTES } from '../utils/router'
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AuthProvider = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const app = useSelector((state => state.app));
    
    // const logIn = () => {};
    const logOut = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('nickname');
      dispatch(setUserData({ nickname: '', token: null }));
      navigate(ROUTES.home);
      console.log('logOut');
    };
  
    return (
            <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
              <div className="container">
                <Navbar.Brand>
                  <Link className="text-decoration-none text-black" to={ROUTES.home} >{t('authProvider.mainHeader')}</Link>
                </Navbar.Brand>
                {app.token
                    ? <Button onClick={() => logOut()} >{t('authProvider.goOut')}</Button>
                  : null}
              </div>
            </nav>
    );
  };

  export default AuthProvider;
