import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MessageList from './MessageList';
import MessageForm from './MessageForm.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const [messages, setMessage] = React.useState([ 
    // { "name": "Bill", "message": "Hi All!" },
    // { "name": "Ann", "message": "ICS 221 is fun!" },
    // { "name": "Johnny", "message": "I'm stranded!" },
    // { "name": "Barb", "message": "Hi" },
    // { "name": "Frank", "message": "Who's tired?" },
    // { "name": "Sarah", "message": "I heart React" }
  ]);

  React.useEffect( () => {
    (async () => {
      try {
        const response = await fetch('http://10.21.75.47:3004/messages');

        if(!response.ok) throw Error(response.status + ': ' + response.statusText);

        const result = await response.json();

        setMessage(result);
      } catch (error) {
        console.log('Fetch API Error: ' + error);
      }
    })();
  },[]);

  const callBack = (values) => {
    // messages.unshift(values);
    setMessage([values, ...messages]);

    (async () => {
      try {
        const request = await fetch('http://10.21.75.47:3004/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(values),
        });

        if(!request.ok) throw Error(request.status + ': ' + request.statusText);
      } catch (error) {
        console.log('Post PI Error: ' + error);
      }
    })();
  }

  return (
    <Container>
      <Row>
        <Col><Header header="ICS 221 Message Board App" /></Col>
      </Row>
      <br/>
      <MessageForm handleCallback={callBack}/>
      <br/>
      <Row>
        <Col><MessageList messages={messages}/></Col>
      </Row>
      <br/>
      <Row>
        <Col><Footer footer="&copy; Quang Pham" /></Col>
      </Row>
    </Container>
  );
}

export default App;
