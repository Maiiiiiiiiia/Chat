import React from 'react';
import { Provider } from 'react-redux';
import store from './slices';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from './utils/router';
import Login from './components/pages/Login'
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Signup from './components/pages/Signup';
import { useSelector } from 'react-redux'; 
import AuthProvider from '../src/components/AuthProvider';
import { ToastContainer } from 'react-toastify';

/* eslint-disable react/prop-types */
const App = () => {
  const PrivateRoute = ({ element }) => {
    const app = useSelector((state => state.app));
    return app.token? element : <Navigate to="/login" />;
  };

  return (
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider />
            <Routes>
              <Route path="/" element={<PrivateRoute element={<Home />} />} />
              <Route path={ROUTES.home} element={<PrivateRoute element={<Home />} />} />
              <Route path={ROUTES.login} element={<Login />} />
              <Route path={ROUTES.signup} element={<Signup />} />
              <Route path={ROUTES.notfound}  element={<NotFound />} />
            </Routes>
          <ToastContainer /> 
        </Provider>
      </BrowserRouter>
  )
}

export default App;
