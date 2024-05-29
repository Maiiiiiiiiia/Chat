import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthContext from '../contexts/AuthContext';
import ROUTES from '../utils/router';
import useAuth from '../hooks/useAuth';

const AuthButton = () => {
  const { t } = useTranslation();
  const auth = useAuth();
  const { logOut } = useContext(AuthContext);

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Navbar.Brand>
          <Link className="text-decoration-none text-black" to={ROUTES.home}>{t('authProvider.mainHeader')}</Link>
        </Navbar.Brand>
        {auth.loggedIn
          ? <Button onClick={logOut}>{t('authProvider.goOut')}</Button>
          : null}
      </div>
    </nav>
  );
};

export default AuthButton;
