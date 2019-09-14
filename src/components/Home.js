import React from 'react';
import styled from 'styled-components';
import HomeFace from './HomeFace';
import HomeInfo from './HomeInfo';
import { animated } from 'react-spring';

const Root = styled(animated.div)`
    grid-row: 1/3;
    grid-column: 1/2;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 10% auto 5% 15% 15%;
    padding: 1rem;
    align-self: start;
    margin-top: 25vh;
`;

export default function Home({ style }) {
    return (
        <Root style={style}>
            <HomeFace></HomeFace>
            <HomeInfo></HomeInfo>
        </Root>
    );
}
