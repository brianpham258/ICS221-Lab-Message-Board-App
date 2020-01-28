import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = ({ header }) => {
    return (
        <Jumbotron><h1>{header}</h1></Jumbotron>
    );
}

export default Header;