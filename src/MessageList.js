import React from 'react';
import styled from 'styled-components';
import Message from './Message';
import Table from 'react-bootstrap/Table';

const MessageList = ({ className, messages }) => {
    return (
        <Table className={className}>
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Message</th>
            </thead>
            <tbody>
                {messages.map(message => (
                    <Message key={message.id} {...message}/>
                ))}
            </tbody>
        </Table>
    );
}

const StyledMessageList = styled(MessageList)`
    width: 100%;

    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(odd) {
        background-color: #dddddd;
    }
`;

export default StyledMessageList;