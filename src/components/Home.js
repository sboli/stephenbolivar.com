import React from 'react';
import styled from 'styled-components';
import HomeFace from './HomeFace';
import HomeInfo from './HomeInfo';
import { animated } from 'react-spring';

const Root = styled(animated.div)`
    grid-area: main;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 10% 30% 5% 15% 15%;
    grid-template-areas: '
        space space
        face face
        space2 space2
        info info
        space3 space3
    ';
`;

export default function Home({ style, key }) {
    return (
        <Root style={style} key={key}>
            <HomeFace></HomeFace>
            <HomeInfo></HomeInfo>
        </Root>
    );
}
