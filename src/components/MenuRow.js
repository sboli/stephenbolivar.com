import React, { useState, useEffect } from 'react';
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
    const [style, setStyle] = useState({
        fontWeight: active ? 'bold' : 'normal'
    });
    useEffect(() => {
        setStyle({
            fontWeight: active ? 'bold' : 'normal'
        });
    }, [active]);
    return (
        <Root style={style} onClick={onClick}>
            <nav>{children}</nav>
        </Root>
    );
}
