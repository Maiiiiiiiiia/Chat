import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Button, CardBody, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
// import { useLoginMutation } from '../../slices/authSlice';
import { setUserData } from '../../slices/appSlice';
import { useSignupMutation } from '../../slices/authSlice';
import { ROUTES } from '../../utils/router';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

const Signup = () => {
    const { t } = useTranslation();
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
                setErrors({ nickname: t('signUp.error.nickName') });
              } else {
                setErrors({ password: t('signUp.error.password') });
              }
            }
        };

    const validationSchema = yup.object().shape({
        username: yup.string().trim()
            .min(3, t('signUp.validationError.usernameMinMax') )
            .max(20, t('signUp.validationError.usernameMinMax'))
            .required(t('signUp.validationError.requiredName')),
        password: yup.string().trim()
            .min(6, t('signUp.validationError.min6'))
            .required(t('signUp.validationError.requiredPassword')),
        confirmPassword: yup.string().trim()
            .notOneOf([yup.ref('password'), null], t('signUp.validationError.confirmPassword'))
            .required(t('signUp.validationError.requiredConfirmPassword')),
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
                            <h1 className="text-center mb-4">{t('signUp.form.registration')}</h1>
                            <Form.Group className="mb-3">
                              <Form.Label htmlFor="nickname">{t('signUp.form.password')}</Form.Label>
                              <Form.Control required id="nickname" value={values.nickname} onChange={handleChange} type="text" name="nickname" isInvalid={!!errors.nickname} ref={usernameRef} />
                              <Form.Control.Feedback type="invalid">{errors.nickname}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                              <Form.Label htmlFor="password">{t('signUp.form.password')}</Form.Label>
                              <Form.Control required id="password" value={values.password} onChange={handleChange} type="password" name="password" isInvalid={!!errors.password} />
                              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                              <Form.Label htmlFor="confirmPassword">{t('signUp.form.confirmPassword')}</Form.Label>
                              <Form.Control required id="confirmPassword" value={values.confirmPassword} onChange={handleChange} type="password" name="confirmPassword" isInvalid={!!errors.confirmPassword} />
                              <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit" className="w-100" variant="outline-primary">{t('signUp.form.login')}</Button>
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