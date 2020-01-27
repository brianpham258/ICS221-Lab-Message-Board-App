import React from 'react';
import styled from 'styled-components';

const Footer = ({ className, footer }) => {
    return (
    <div className={className}>{footer}</div>
    );
}

const StyledFooter = styled(Footer)`
    width: 100%;
    text-align: right;
    font-size: 1em;
`;

export default StyledFooter;