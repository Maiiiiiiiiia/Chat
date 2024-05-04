import React from 'react';
import { Formik, Form, Field } from 'formik';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Login = () => {

    return (
        <Container>
        <Row className="justify-content-center">
        <Col xs="12" md="8" xxl="6">
        <Card className="shadow-sm">
        <Formik
        initialValues={{ nickname: "", password: "" }}
        onSubmit={({ setSubmitting }) => {
            console.log("Form is validated! Submitting the form...");
            setSubmitting(false);
        }}
    >
        <Form>
            <div className="form-group">
                <label htmlFor="nickname">Ваш ник</label>
                <Field type="text" name="nickname" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <Field type="password" name="password" className="form-control" />
            </div>
            <button>Войти</button>
        </Form>
    </Formik>
    </Card>
    </Col>
    </Row>
    </Container>
    )
  };
  
  export default Login;