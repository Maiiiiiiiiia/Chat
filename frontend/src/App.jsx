import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ROUTES from './utils/router';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Signup from './components/pages/Signup';
import AuthButton from './components/AuthButton';
import AuthProvider from './components/AuthProvider';
import useAuth from './hooks/useAuth';
import ROUTER from './utils/router';

const PrivateRoute = ({ element }) => {
  const auth = useAuth();
  return auth.loggedIn ? element : <Navigate to={ROUTER.login} />;
};

/* eslint-disable react/prop-types */
const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <AuthButton />
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path={ROUTES.home} element={<PrivateRoute element={<Home />} />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.signup} element={<Signup />} />
        <Route path={ROUTES.notfound} element={<NotFound />} />
      </Routes>
    </AuthProvider>
    <ToastContainer />
  </BrowserRouter>
);

export default App;
