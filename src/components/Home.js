import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomeFace from './HomeFace';
import HomeInfo from './HomeInfo';
import { animated, useSpring, config } from 'react-spring';
import { device } from '../mediaqueries';

const Root = styled(animated.div)`
    grid-row: 1/3;
    grid-column: 1/2;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 1rem;
    padding: 1rem;
    align-self: start;
    margin-top: 20vh;
    @media ${device.tablet} {
        margin-top: 25vh;
    }
`;

export default function Home({ style }) {
    const [firstDraw, setFirstDraw] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setFirstDraw(false);
        }, 600);
    }, []);
    return (
        <Root style={firstDraw ? {} : style}>
            <HomeFace></HomeFace>
            <HomeInfo></HomeInfo>
        </Root>
    );
}
