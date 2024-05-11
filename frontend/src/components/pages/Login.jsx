import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Button, Form } from 'react-bootstrap';
import { 
    // useLocation, 
    Link,
    useNavigate,
} from 'react-router-dom';
// import useAuth from '../hooks/index.jsx';
import useAuth from '../../hooks/index';
import routes from '../../utils/routes';
import { setUserData } from '../../slices/authSlice';
import { ROUTES } from '../../utils/router';

const Login = () => {
    const auth = useAuth();
    const [authFailed, setAuthFailed] = useState(false);
    const inputRef = useRef();
    // const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      inputRef.current.focus();
    }, []);
  
    const formik = useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      onSubmit: async (values) => {
        setAuthFailed(false);
        console.log(authFailed, 'authFailed');
        try {
          console.log('its work');
          const res = await axios.post(routes.loginPath(), values);
          // console.log(res, 'res');
          // console.log(res.data, 'res.data');
          localStorage.setItem('userId', JSON.stringify(res.data));
          auth.logIn(res);
          // console.log(location, 'location');
          dispatch(setUserData({ token: res.data.token, username: values.username }));
          navigate('/');
          console.log('its work Home');
        } catch (err) {
          console.log(err);
          formik.setSubmitting(false);
          if (err.isAxiosError && err.response.status === 401) {
            setAuthFailed(true);
            inputRef.current.select();
            return;
          }
          throw err;
        }
      },
    });


    return (
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-content-center h-100">
          <div className="col-12 col-md-8 col-xxl-6">

            <Card className="shadow-sm">
                    <div className="card-body row p-5">
                        <Form onSubmit={formik.handleSubmit} className="p-3">
                            <Form.Group>
                                <Form.Label htmlFor="nickname">Ваш ник</Form.Label>
                                <Form.Control
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                placeholder="username"
                                name="username"
                                id="username"
                                autoComplete="username"
                                isInvalid={authFailed}
                                required
                                ref={inputRef}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="password">Пароль</Form.Label>
                                <Form.Control
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                placeholder="password"
                                name="password"
                                id="password"
                                autoComplete="current-password"
                                isInvalid={authFailed}
                                required
                                />
                            <Form.Control.Feedback type="invalid">the username or password is incorrect</Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit" variant="outline-primary" >Войти</Button>
                        </Form>
                    </div>
                        <div className="card-footer p-4">
                            <div className="text-center">
                                <span>Нет аккаунта?</span>
                                <Link to={ROUTES.signup}>Регистрация</Link>

                            </div>
                        </div>
              
            </Card>
          </div>
          </div>
          </div>
    )
  };
  
  export default Login;
