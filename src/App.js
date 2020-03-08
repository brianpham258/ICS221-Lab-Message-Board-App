import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Footer from './Footer';
import MessagePage from './MessagePage';
import LoginPage from './LoginPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

const PageLayout = ({ children, header }) => (
    <Container>
        <Row>
            <Col><Header header={header} /></Col>
        </Row>
        {children}
        <Row>
            <Col><Footer footer="&copy; Quang Pham" /></Col>
        </Row>
    </Container>
);

const App = () => {
    const [userCredential, setUserCredential] = useState();
    const handleLoggedIn = (username, password) => {
        setUserCredential({ username, password });
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => {
                    return <Redirect to="/login" />
                }} />
                <Route exact path="/login">
                    <PageLayout header="Message Board App Login">
                        <LoginPage onLoggedIn={handleLoggedIn} />
                    </PageLayout>
                </Route>
                <Route exact path="/messages" render={() => {
                    if (!userCredential)
                        return <Redirect to="/login" />

                    return (
                        <PageLayout header="ICS 221 Message Board App">
                            <MessagePage userCredential={userCredential} />
                        </PageLayout>
                    )
                }}>

                </Route>
            </Switch>
        </Router>
    );
};

export default App;