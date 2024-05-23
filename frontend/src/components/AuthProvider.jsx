import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../slices/appSlice.js';
import { ROUTES } from '../utils/router'
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthProvider = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const app = useSelector((state => state.app));
    // console.log(app); // {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiO…M1MX0.0apLj5uGle0oJTWceA5C8sihWzCLlSQF065Ie17-d8Y', username: 'admin', currentChannelId: '1', currentChannelName: 'general'}
    
    // const logIn = () => {};
    const logOut = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('nickname');
      dispatch(setUserData({ nickname: '', token: null }));
      // navigate(ROUTES.login);
      navigate(ROUTES.home);
      console.log('logOut')
    };
  
    return (
            <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
              <div className="container">
                <Navbar.Brand>
                  <Link className="text-decoration-none text-black" to={ROUTES.home} >Hexlet Chat</Link>
                </Navbar.Brand>
                {app.token
                    ? <Button onClick={() => logOut()} >Выйти</Button>
                  : null}
              </div>
            </nav>
    );
  };

  export default AuthProvider;
