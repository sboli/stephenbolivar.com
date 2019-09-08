import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

const AnimatedRoot = styled(animated.div)`
    padding: 20px 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    font-size: 2rem;
    color: inherit;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export default function MenuRow({ children, onClick, active, style }) {
    const [fontStyle, setFontStyle] = useState({
        fontWeight: active ? 'bold' : 'normal'
    });
    useEffect(() => {
        setFontStyle({
            fontWeight: active ? 'bold' : 'normal'
        });
    }, [active]);
    return (
        <AnimatedRoot style={{ ...style, ...fontStyle }} onClick={onClick}>
            <nav>{children}</nav>
        </AnimatedRoot>
    );
}
