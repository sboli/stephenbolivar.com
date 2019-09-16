import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { useSpring, animated, config } from 'react-spring';

const Root = styled(animated.div)`
    width: 160px;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

const Title = styled.h4`
    width: 100%;
    text-align: center;
    font-weight: bold;
    min-height: 2.5rem;
`;

export default function Pie({ title, progress }) {
    const Progress = styled(animated.div)`
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: ${theme.primary};
        background-image: linear-gradient(to right, transparent 50%, lightgray 0);
    `;
    const ProgressPie = styled(Progress)`
        margin-left: 50%;
        width: 60px;
        height: 120px;
        background-color: ${theme.primary};
        transform-origin: left;
        border-radius: 0 100% 100% 0/50%;
        background-image: linear-gradient(to right, transparent 100%, lightgray 0);
    `;
    return (
        <Root>
            <Title>{title}</Title>
            <Progress>
                <ProgressPie style={{ transform: `rotate(${1 - progress}turn)` }}></ProgressPie>
            </Progress>
        </Root>
    );
}
