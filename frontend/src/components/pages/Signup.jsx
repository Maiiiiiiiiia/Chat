import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Button, CardBody, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { ROUTES } from '../../utils/router';
import { Formik } from 'formik';
// import { useLoginMutation } from '../../slices/authSlice';
import { setUserData } from '../../slices/appSlice';
import { useSignupMutation } from '../../slices/authSlice';
import { ROUTES } from '../../utils/router';
import * as yup from 'yup';

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [signup] = useSignupMutation();
    const usernameRef = useRef(null);

    const handleFormSubmit = async (values, { setErrors }) => {
        const { nickname, password } = values;
        const user = {
          username: nickname,
          password,
        };
        try {  
            const { data } = await signup(user);
            if (data) {
                dispatch(setUserData({ nickname, token: data.token }));
                localStorage.setItem('token', data.token);
                localStorage.setItem('nickname', nickname);
                return navigate(ROUTES.home);
            }          
        } catch (error) {
            if (error.status === 409) {
                setErrors({ nickname: 'Пользователь с таким именем уже существует' });
              } else {
                setErrors({ password: 'Неверные имя пользователя или пароль' });
              }
            }
        };

    const validationSchema = yup.object().shape({
        username: yup.string().trim()
            .min(3, 'Имя должно содержать от 3 до 20 символов')
            .max(20, 'Имя должно содержать от 3 до 20 символов')
            .required('Имя обязательно'),
        password: yup.string().trim()
            .min(6, 'Минимум 6 символов')
            .required('Поле пароль обязательно'),
        confirmPassword: yup.string().trim()
            .notOneOf([yup.ref('password'), null], 'Пароли должны совпадать')
            .required('Поле подтверждения пароля обязательно'),
    })

        return (
            <div className="container-fluid h-100">
              <div className="row justify-content-center align-content-center h-100">
              <div className="col-12 col-md-8 col-xxl-6">
                <Card className="shadow-sm">
                    <CardBody className="d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
                        <Formik
                            initialValues={{ nickname: '', password: '', passwordConfirm: '' }}
                            onSubmit={handleFormSubmit}
                            validationSchema={validationSchema}
                        >
                        {({
                          handleSubmit, handleChange, values, errors,
                        }) => (
                          <Form onSubmit={handleSubmit} className="form">
                            <h1 className="text-center mb-4">Регистрация</h1>
                            <Form.Group className="mb-3">
                              <Form.Label htmlFor="nickname">Ваш ник</Form.Label>
                              <Form.Control required id="nickname" value={values.nickname} onChange={handleChange} type="text" name="nickname" isInvalid={!!errors.nickname} ref={usernameRef} />
                              <Form.Control.Feedback type="invalid">{errors.nickname}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                              <Form.Label htmlFor="password">Пароль</Form.Label>
                              <Form.Control required id="password" value={values.password} onChange={handleChange} type="password" name="password" isInvalid={!!errors.password} />
                              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                              <Form.Label htmlFor="confirmPassword">Подтвердите пароль</Form.Label>
                              <Form.Control required id="confirmPassword" value={values.confirmPassword} onChange={handleChange} type="password" name="confirmPassword" isInvalid={!!errors.confirmPassword} />
                              <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit" className="w-100" variant="outline-primary">Зарегистрироваться</Button>
                          </Form>
                        )}
                      </Formik>


                    </CardBody>
                </Card>
              </div>
              </div>
              </div>
        )
};
export default Signup;