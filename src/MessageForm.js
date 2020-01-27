import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';

const schema = yup.object({
    name: yup
        .string()
        .trim()
        .min(2, 'Your name must be at least 2 characters!')
        .max(10, 'Your name cannot be more than 10 characters!')
        .matches(/[a-zA-Z]{2,}/, 'Invalid name. Use Upper or Lowercase letter only!')
        .required('Your name is required!'),
    msg: yup
        .string()
        .trim()
        .min(3, 'Your message must be at least 3 characters!')
        .max(20, 'Your message cannot be more than 20 characters!')
        .required('Your message is required!')
});

const MessageForm = () => {
    return (
        <Card className="mb-4">
            <Form>
                <Card.Body>
                    <Card.Title>Add a Message:</Card.Title>
                    <Row className="align-items-center">
                        <Form.Group controlId="name" as={Col}>
                            <Form.Label>Enter Name:</Form.Label>
                            <Form.Control type="textarea" name="name" placeholder="Your name" /> 
                        </Form.Group>
                        <Form.Group controlId="msg" as={Col} md={6}>
                            <Form.Label>Enter Message:</Form.Label>
                            <Form.Control type ="textarea" name="message" placeholder="Your message" />
                        </Form.Group>
                        <Col>
                            <Button variant="primary" type="submit" className="mt-3">Submit</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Form>
        </Card>
    );
}

const StyledMessageForm = styled(MessageForm)`
    width: 100%;
`;

export default StyledMessageForm;