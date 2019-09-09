import React from 'react';
import styled from 'styled-components';
import HomeFace from './HomeFace';
import HomeInfo from './HomeInfo';
import { animated } from 'react-spring';

const Root = styled(animated.div)`
    height: 92vh;
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
