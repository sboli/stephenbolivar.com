import React from 'react';
import { animated, useSpring, config } from 'react-spring';
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
    overflow-y: hidden;
    align-self: start;
    @media ${device.tablet} {
        margin-top: 15vh;
    }
    background-color: ${props => props.theme.background};
`;

export default function About({ style }) {
    const iconsStyle = useSpring({
        from: { transform: 'translate3d(0, 100px, 0', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0', opacity: 1 },
        config: config.slow
    });
    return (
        <Root style={style}>
            <AboutImage></AboutImage>
            <AboutText></AboutText>
            <AboutIcons style={iconsStyle}></AboutIcons>
        </Root>
    );
}
