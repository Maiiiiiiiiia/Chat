import React from 'react';
import useAuth from '../hooks/index.jsx';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import routes from '../utils/routes';

const AuthButton = () => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.token) {
      return null;
  }

    return (
      <Button onClick={auth.logOut} state={{ from: location }} >Выйти</Button>
    );
    // return (
    //   <Button onClick={auth.logOut} as={Link} to={routes.loginPathWithoutToken()} state={{ from: location }} >Выйти</Button>
    // );

  };

  export default AuthButton;
