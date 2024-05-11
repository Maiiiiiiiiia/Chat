import React, 
{ 
  // useState, useMemo, useCallback, 
} 
from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';
import useAuth from './hooks/index.jsx';
// import './App.css';
import { 
  BrowserRouter,
  Route,
  Routes, 
  Link, 
  Navigate,
} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import { ROUTES } from './utils/router';
import Login from './components/pages/Login'
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Signup from './components/pages/Signup';
// import routes from './utils/routes'
import AuthProvider from './components/AuthProvider';
import AuthButton from './components/AuthButton';
// import AuthContext from './contexts/index.jsx'

/* eslint-disable react/prop-types */
const PrivateRoute = ({ element }) => {
  const auth = useAuth();
  return auth.loggedIn ? <Route element={element} /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>

    <AuthProvider>
      <div className="h-100">
        <div className="h-100" id="chat">
          <div className="d-flex flex-column h-100">
            <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
              <div className="container">
                <Navbar.Brand as={Link} to="/">Hexlet Chat</Navbar.Brand>
              <AuthButton />
              </div>
            </nav>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path={ROUTES.signup} element={<Signup />} />
              <Route path={ROUTES.notfound}  element={<NotFound />} />
              <Route path={ROUTES.login} element={<Login />} />
              {/* <Route element={<PrivateRoute element={<Home />} />} /> */}
              <Route path="/login" element={(
                <PrivateRoute>
                <Home />
              </PrivateRoute>
              )}/>
            </Routes>


          </div>
        </div>
      </div>
    </AuthProvider>
        </BrowserRouter>

  )
}

export default App;
