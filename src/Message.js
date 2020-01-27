import React from 'react';

const Message = ({ className, id, name, message }) => {
    return (
        <tr className={className}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{message}</td>
        </tr>
    );
}

export default Message;