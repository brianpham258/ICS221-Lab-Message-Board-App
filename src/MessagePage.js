import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

const MessagePage = ({userCredential}) => {
    const [messages, setMessage] = React.useState([]);

    React.useEffect( () => {
      (async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/messages`);
  
          if(!response.ok) throw Error(response.status + ': ' + response.statusText);
  
          const result = await response.json();
  
          setMessage(result);
        } catch (error) {
          console.log('Fetch API Error: ' + error);
        }
      })();
    },[]);
  
    // const basicString = `${userCredential.username}:${userCredential.password}`

    const callBack = (values) => {
      // messages.unshift(values);
      setMessage([values, ...messages]);
  
      (async () => {
        try {
          const request = await fetch(`${process.env.REACT_APP_API_URL}/messages`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(values),
          });
  
          if(!request.ok) throw Error(request.status + ': ' + request.statusText);
        } catch (error) {
          console.log('Post PI Error: ' + error);
        }
      })();
    }

    return (
        <>
            <br/>
            <MessageForm handleCallback={callBack}/>
            <br/>
            <Row>
                <Col><MessageList messages={messages}/></Col>
            </Row>
        </>
    );
}

export default MessagePage;