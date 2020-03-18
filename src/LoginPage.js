import React from 'react';
import { withRouter } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as yup from 'yup';

const LoginPage = ({ onLoggedIn, history }) => {
    const schema = yup.object({
        username: yup
            .string()
            .trim()
            .min(2, 'Your username must be at least 2 characters!')
            .max(10, 'Your username cannot be more than 10 characters!')
            .matches(/[a-zA-Z]{2,}/, 'Invalid name. Use Upper or Lowercase letter only!')
            .required('Your name is required!'),
        password: yup
            .string()
            .trim()
            .min(3, 'Your password must be at least 3 characters!')
            .max(64, 'Your password cannot be more than 64 characters!')
            .required('Your message is required!')
    });

    const handleFormData = (values, actions) => {
        (async () => {
            try {
                const request = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values),
                });

                const result = await request.json();
                sessionStorage.setItem('token', result.token);
                
                if(request.ok) {
                    onLoggedIn(values.username, values.password);
                    history.push("/messages");
                } else {
                    throw Error(request.status + ': ' + request.statusText);
                }
            } catch (error) {
              console.log('Post PI Error: ' + error);
            }
        })();
        actions.setSubmitting(false);
        // console.log(values);
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleFormData}
            initialValues={{ username: '', password: '' }}
        >
            {
                ({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    errors,
                }) => (
                    <Card className="mb-4">
                        <Form onSubmit={handleSubmit} noValidate>
                            <Card.Body>
                                <Card.Title>Login</Card.Title>
                                <Row className="align-items-center">
                                    <Form.Group controlId="username" as={Col}>
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control 
                                            type="input"
                                            name="username"
                                            placeholder="Your username"
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.username && !errors.username}
                                            isInvalid={touched.username && errors.username}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.username}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="password" as={Col} md={6}>
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control 
                                            type ="password"
                                            name="password"
                                            placeholder="Your password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.password && !errors.password}
                                            isInvalid={touched.password && errors.password}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Col>
                                        <Button variant="primary" type="submit" className="mt-3">Login</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Form>
                    </Card>
                )
            }
        </Formik>
    );
}

export default withRouter(LoginPage);