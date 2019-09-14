import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import AboutImage from './AboutImage';
import AboutText from './AboutText';
import AboutIcons from './AboutIcons';
import device from '../mediaqueries';

const Root = styled(animated.div)`
    grid-column: 1/2;
    grid-row: 2/3;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    justify-content: space-evenly;
    align-content: center;
    align-items: start;
    padding: 1rem;

    @media ${device.tablet} {
        width: 80%;
    }
    @media ${device.laptopL} {
        width: 75%;
    }
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
