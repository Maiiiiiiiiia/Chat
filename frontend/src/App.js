import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ToastContainer as Toaster } from 'react-toastify';

import { ROUTES } from './utils/router';

import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp'

// import { Navbar, Modal, ProtectRoute } from './containers'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.signup} element={<SignUp />} />
      <Route path={ROUTES.notfound}  element={<NotFound />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App;
