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
    const faceStyle = useSpring({
        from: {
            transform: 'translate3d(100px, 0, 0)',
            opacity: 0
        },
        to: {
            transform: 'translate3d(0, 0px, 0)',
            opacity: 1
        },
        config: config.default
    });
    const infoStyle = useSpring({
        from: {
            transform: 'translate3d(-100px, 0, 0)',
            opacity: 0
        },
        to: {
            transform: 'translate3d(0, 0px, 0)',
            opacity: 1
        },
        config: config.default
    });
    useEffect(() => {
        setTimeout(() => {
            setFirstDraw(false);
        }, 600);
    }, []);
    return (
        <Root style={firstDraw ? {} : style}>
            <HomeFace style={firstDraw ? faceStyle : {}}></HomeFace>
            <HomeInfo style={firstDraw ? infoStyle : {}}></HomeInfo>
        </Root>
    );
}
