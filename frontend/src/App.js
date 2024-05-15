import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';
// import useAuth from './hooks/index.jsx';
// import './App.css';
import { 
  BrowserRouter,
  Route,
  Routes, 
  Navigate,
} from 'react-router-dom';
import { ROUTES } from './utils/router';
import Login from './components/pages/Login'
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Signup from './components/pages/Signup';
// import routes from './utils/routes'
import AuthProvider from './components/AuthProvider';
// import AuthButton from './components/AuthButton';
// import { useDispatch } from 'react-redux';
// import AuthContext from './contexts/index.jsx'
// import { addMessages } from './slices/messagesSlice';
import { useSelector } from 'react-redux'; 
/* eslint-disable react/prop-types */


const App = () => {
  const PrivateRoute = ({ element }) => {
    // const auth = useAuth();
    const app = useSelector((state => state.app));
    // console.log(app.token)
    return app.token? element : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
        <AuthProvider />
          <Routes>
            <Route path={ROUTES.home} element={<PrivateRoute element={<Home />} />} />
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.signup} element={<Signup />} />
            <Route path={ROUTES.notfound}  element={<NotFound />} />
          </Routes>
    </BrowserRouter>

  )
}

export default App;

// <BrowserRouter>
// <AuthProvider />
//   <Routes>
//     {/* <Route path={ROUTES.home} element={<Home />} /> */}
//     <Route path={ROUTES.home} element={(
//        <PrivateRoute>
//         <Home />
//        </PrivateRoute>
//       )} />
//     <Route path={ROUTES.login} element={<Login />} />
//     {/* <Route path="/" element={<Home />} /> */}
//     <Route path={ROUTES.signup} element={<Signup />} />
//     <Route path={ROUTES.notfound}  element={<NotFound />} />
//     {/* <Route path="/" element={(
//       <PrivateRoute>
//       <Home />
//     </PrivateRoute>
//     )}/> */}
//   </Routes>
// </BrowserRouter>