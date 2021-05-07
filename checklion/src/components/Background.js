import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledBackground = styled.div`
    margin-top: -23%;
    margin-left: 20%;
    width: 1400px;
    height: 1000px;
    border-radius: 50%;
    box-shadow: 30px 50px 50px rgba(0, 0, 0, 0.1);
    background-color: white;
`;

function Background () {
    return (
            <StyledBackground />
    )
}

export default Background;
