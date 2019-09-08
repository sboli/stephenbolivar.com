import React from 'react';
import styled from 'styled-components';

const Root = styled.button`
    padding: 20px 20px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    font-size: 2rem;
    color: inherit;
`;

export default function MenuRow({ children, onClick, active }) {
    const style = {
        fontWeight: active ? 'bold' : 'normal'
    };
    return (
        <Root style={style}>
            <nav>{children}</nav>
        </Root>
    );
}
