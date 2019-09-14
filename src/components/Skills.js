import React from 'react';
import device from '../mediaqueries';
import { animated } from 'react-spring';
import styled from 'styled-components';

const Root = styled(animated.div)`
    grid-column: 1/2;
    grid-row: 2/3;
    width: 100%;
`;
export default function Skills() {
    return <Root></Root>;
}
