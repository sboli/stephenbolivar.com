import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import AboutImage from './AboutImage';
import AboutText from './AboutText';
import AboutIcons from './AboutIcons';

const Root = styled(animated.div)`
    grid-area: main;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    justify-content: space-evenly;
    align-content: center;
    align-items: start;
`;

export default function About({ style }) {
    return (
        <Root style={style}>
            <AboutImage></AboutImage>
            <AboutText></AboutText>
            <AboutIcons></AboutIcons>
        </Root>
    );
}
