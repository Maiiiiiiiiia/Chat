import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { ROUTES } from '../utils/router'
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthContext from '../contexts/AuthContext';

const AuthButton = () => {
    const { t } = useTranslation();
    const app = useSelector((state => state.app));
    const { logOut } = useContext(AuthContext);

    return (
            <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
              <div className="container">
                <Navbar.Brand>
                  <Link className="text-decoration-none text-black" to={ROUTES.home} >{t('authProvider.mainHeader')}</Link>
                </Navbar.Brand>
                {app.token
                    ? <Button onClick={logOut} >{t('authProvider.goOut')}</Button>
                  : null}
              </div>
            </nav>
    );
  };

  export default AuthButton;
