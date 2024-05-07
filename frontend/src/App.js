import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './slices';
// import useAuth from './hooks/index.jsx';
// import AuthContext from '../contexts/index.jsx';

// import './App.css';
import { 
  BrowserRouter,
  Route,
  Routes, 
  Link, 
  // Navigate,
  // useLocation,
} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { ROUTES } from './utils/router';

import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp'

// const AuthProvider = ({ children }) => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const logIn = () => setLoggedIn(true);
//   const logOut = () => {
//     localStorage.removeItem('token');
//     setLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const PrivateRoute = ({ children }) => {
//   const auth = useAuth();
//   const location = useLocation();

//   return (
//     auth.loggedIn ? children : <Navigate to="/login" state={{ from: location }} />
//   );
// };

// const AuthButton = () => {
//   const auth = useAuth();
//   const location = useLocation();

//   return (
//     auth.loggedIn
//       ? <Button onClick={auth.logOut}>Log out</Button>
//       : <Button as={Link} to="/login" state={{ from: location }}>Log in</Button>
//   );
// };

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="h-100">
        <div className="h-100" id="chat">
          <div className="d-flex flex-column h-100">
            <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
              <div className="container">
                <Navbar.Brand as={Link} to="/">Hexlet Chat</Navbar.Brand>
                <button type="button" className="btn btn-primary">Выйти</button>
              </div>
            </nav>

            <Routes>
              <Route path={ROUTES.login} element={<Login />} />
              <Route path={ROUTES.home} element={<Home />} />
              <Route path={ROUTES.signup} element={<SignUp />} />
              <Route path="*"  element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    </Provider>
  )
}

export default App;

  {/* <Route
    path="/login"
    element={(
      <PrivateRoute>
        {<SignUp />} 
      </PrivateRoute>
    )}
    /> */}