import React from 'react';
import styled from 'styled-components';

const Header = ({ className, header }) => {
    return (
        <div className={className}>{header}</div>
    );
}

const StyledHeader = styled(Header)`
    padding: 30px 30px 40px 30px;
    background-color: #cccccc;
    width: 100%;
    font-size: 2em;
`;

export default StyledHeader;