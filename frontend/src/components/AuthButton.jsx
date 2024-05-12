import React from 'react';
import useAuth from '../hooks/index.jsx';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import routes from '../utils/routes';

const AuthButton = () => {
    const auth = useAuth();
    const location = useLocation();

    return (
      auth.token
      ? <Button onClick={auth.logOut} state={{ from: location }} >Выйти</Button>
      : null
    );
  };

  export default AuthButton;
