import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import { ToastContainer as Toaster } from 'react-toastify';
import { Navbar } from 'react-bootstrap';
import { ROUTES } from './utils/router';

import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import SignUp from './pages/SignUp'

const App = () => {
  return (
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
      <Route path="*"  element={<NotFound />} /> 
    </Routes>
    </div>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
