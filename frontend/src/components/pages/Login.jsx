import React, { 
  // useEffect, 
  // useRef, 
  // useState 
} from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Button, Form } from 'react-bootstrap';
import { 
    // useLocation, 
    Link,
    useNavigate,
} from 'react-router-dom';
// import useAuth from '../hooks/index.jsx';
// import routes from '../../utils/routes';
// import { setUserData } from '../../slices/authSlice';
import { ROUTES } from '../../utils/router';
import { Formik } from 'formik';
import { useLoginMutation } from '../../slices/authSlice';
import { setUserData } from '../../slices/appSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

    // useEffect(() => {
    //   inputRef.current.focus();
    // }, []);

    const handleFormSubmit = async (values) => {
      const { nickname, password } = values;
      const user = {
        username: nickname,
        password,
      };
      const { data, error } = await login(user);
      console.log(data);
      if (data) {
        dispatch(setUserData({ nickname, token: data.token }));
        localStorage.setItem('token', data.token);
        console.log(data.token);
        return navigate('/Home');
      }
      if (error) {
        console.log(error);
      }
      return null;
    };
  
    // const formik = useFormik({
    //   initialValues: {
    //     username: '',
    //     password: '',
    //   },
    //   onSubmit: async (values) => {
    //     setAuthFailed(false);
    //     console.log(authFailed, 'authFailed');
    //     try {
    //       // console.log('its work');
    //       const res = await axios.post(routes.loginPath(), values);
    //       // console.log(res, 'res');
    //       // console.log(res.data, 'res.data');
    //       localStorage.setItem('userId', JSON.stringify(res.data));
    //       auth.logIn(res);
    //       // console.log(location, 'location');
    //       // dispatch(setUserData({ token: res.data.token, username: values.username }));
    //       navigate('/');
    //       console.log('its work Home');
    //     } catch (err) {
    //       console.log(err);
    //       formik.setSubmitting(false);
    //       if (err.isAxiosError && err.response.status === 401) {
    //         setAuthFailed(true);
    //         inputRef.current.select();
    //         return;
    //       }
    //       throw err;
    //     }
    //   },
    // });


    return (
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-content-center h-100">
          <div className="col-12 col-md-8 col-xxl-6">

            <Card className="shadow-sm">
                    <div className="card-body row p-5">
                    <Formik
                    initialValues={{ nickname: '', password: '' }}
                    onSubmit={handleFormSubmit}
                  >
                    {({
                      handleSubmit, handleChange, values, errors,
                    }) => (
                      <Form onSubmit={handleSubmit} className="form">
                        <h1>Войти</h1>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="nickname">Никнейм</Form.Label>
                          <Form.Control id="nickname" required value={values.nickname} onChange={handleChange} type="text" name="nickname" isInvalid={!!errors.password} autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3 position-relative">
                          <Form.Label htmlFor="password">Пароль</Form.Label>
                          <Form.Control id="password" required value={values.password} onChange={handleChange} type="password" name="password" isInvalid={!!errors.password} />
                          <Form.Control.Feedback type="invalid" tooltip>Неверные имя пользователя или пароль</Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit" className="w-100" variant="outline-primary">Войти</Button>
                      </Form>
                    )}
                  </Formik>
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
