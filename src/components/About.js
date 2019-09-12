import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import AboutImage from './AboutImage';
import AboutText from './AboutText';

const Root = styled(animated.div)`
    grid-area: main;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    grid-gap: 20px;
    justify-content: space-evenly;
    align-content: space-evenly;
    align-items: center;
`;

export default function About({ style }) {
    return (
        <Root style={style}>
            <AboutImage></AboutImage>
            <AboutText></AboutText>
        </Root>
    );
}
