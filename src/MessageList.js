import React from 'react';
import Table from 'react-bootstrap/Table';

var num = 0;

const Message = ({ name, message }) => {
    return (
        <tr>
            <td>{num += 1}</td>
            <td>{name}</td>
            <td>{message}</td>
        </tr>
    );
}

const MessageList = ({ className, messages }) => {
    num = 0;
    return (
        <Table className={className}>
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Message</th>
            </thead>
            <tbody>
                {messages.map(message => (
                    <Message key={num} {...message}/>
                ))}
            </tbody>
        </Table>
    );
}

export default MessageList;