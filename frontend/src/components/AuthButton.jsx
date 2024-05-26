import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
// import { setUserData } from '../slices/appSlice.js';
import { ROUTES } from '../utils/router'
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthContext from '../contexts/AuthContext';

const AuthButton = () => {
    // const [loggedIn, setLoggedIn] = useState(false);
    const { t } = useTranslation();
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const app = useSelector((state => state.app));
    const { logOut } = useContext(AuthContext);
    // const logIn = (token, nickname) => {
    //   localStorage.setItem('token', token);
    //   localStorage.setItem('nickname', nickname);
    //   dispatch(setUserData({ nickname, token }));
    //   setLoggedIn(true);
    //   console.log('logIn');
    // };

    // const logOut = () => {
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('nickname');
    //   dispatch(setUserData({ nickname: '', token: null }));
    //   navigate(ROUTES.home);
    //   setLoggedIn(false);
    //   console.log('logOut');
    // };


  
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