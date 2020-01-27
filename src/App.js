import React from 'react';
import './App.css';
import StyledHeader from './Header';
import StyledFooter from './Footer';
import StyledMessageList from './MessageList';
import StyledMessageForm from './MessageForm.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const messages = [
    { "id": 1, "name": "Bill", "message": "Hi All!" },
    { "id": 2, "name": "Ann", "message": "ICS 221 is fun!" },
    { "id": 3, "name": "Johnny", "message": "I'm stranded!" },
    { "id": 4, "name": "Barb", "message": "Hi" },
    { "id": 5, "name": "Frank", "message": "Who's tired?" },
    { "id": 6, "name": "Sarah", "message": "I heart React" }
  ];

  return (
    <Container>
      <Row>
        <Col><StyledHeader header="ICS 221 Message Board App" /></Col>
      </Row>
      <br/>
      <StyledMessageForm/>
      <br/>
      <Row>
        <Col><StyledMessageList messages={messages}/></Col>
      </Row>
      <br/>
      <Row>
        <Col><StyledFooter footer="&copy; Quang Pham" /></Col>
      </Row>
    </Container>
  );
}

export default App;
