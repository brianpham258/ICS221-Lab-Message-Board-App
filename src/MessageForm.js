import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object({
    name: yup
        .string()
        .trim()
        .min(2, 'Your name must be at least 2 characters!')
        .max(10, 'Your name cannot be more than 10 characters!')
        .matches(/[a-zA-Z]{2,}/, 'Invalid name. Use Upper or Lowercase letter only!')
        .required('Your name is required!'),
    message: yup
        .string()
        .trim()
        .min(3, 'Your message must be at least 3 characters!')
        .max(20, 'Your message cannot be more than 20 characters!')
        .required('Your message is required!')
});

const MessageForm = ({handleCallback}) => {
    const handleFormData = (values, actions) => { 
        handleCallback(values)
        actions.setSubmitting(false);
        // console.log(values);
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleFormData}
            initialValues={{ name: '', message: '' }}
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
                                <Card.Title>Add a Message:</Card.Title>
                                <Row className="align-items-center">
                                    <Form.Group controlId="name" as={Col}>
                                        <Form.Label>Enter Name:</Form.Label>
                                        <Form.Control 
                                            type="textarea"
                                            name="name"
                                            placeholder="Your name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.name && !errors.name}
                                            isInvalid={touched.name && errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="message" as={Col} md={6}>
                                        <Form.Label>Enter Message:</Form.Label>
                                        <Form.Control 
                                            type ="textarea"
                                            name="message"
                                            placeholder="Your message"
                                            value={values.message}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isValid={touched.message && !errors.message}
                                            isInvalid={touched.message && errors.message}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Col>
                                        <Button variant="primary" type="submit" className="mt-3">Submit</Button>
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

export default MessageForm;