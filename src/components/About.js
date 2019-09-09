import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import HomeFace from './HomeFace';

const Root = styled(animated.div)`
    grid-area: main;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 10% 30% 5% 15% 15%;
`;

export default function About({ style, key }) {
    return (
        <Root style={style} key={key}>
            <HomeFace></HomeFace>
        </Root>
    );
}
