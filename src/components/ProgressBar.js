import React, { useCallback } from 'react';
import styled from 'styled-components';
import devices from '../mediaqueries';
import theme from '../theme';
import { animated, useSpring, config } from 'react-spring';

const Progress = ({ progress }) => {
    const Root = styled.div`
        height: 100%;
        width: ${progress * 100 + '%'};
        background-color: ${props => props.theme.primary};
        border-radius: inherit;
    `;

    return <Root></Root>;
};

const Root = styled.div`
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    overflow: hidden;
`;

const Background = styled.div`
    height: 10px;
    border-radius: 5px;
    @media ${devices.tablet} {
        height: 15px;
        border-radius: 7.5px;
    }
    background-color: lightgray;
`;
const Info = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 1 fr;
    grid-template-columns: auto auto;
    justify-items: space-between;
`;

export default function ProgressBar({ title, progress }) {
    let level = 'Bon';
    if (progress >= 0.7) level = 'Plutôt bon';
    if (progress >= 0.8) level = 'Très bon';
    if (progress >= 0.9) level = 'Excellent';
    return (
        <Root>
            <Info>
                <h4 style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: 2 }}>{title}</h4>
                <span style={{ textAlign: 'right', fontSize: '.8rem', color: theme.textSecondary, marginBottom: 2 }}>
                    {level}
                </span>
            </Info>
            <Background>
                <Progress progress={progress}></Progress>
            </Background>
        </Root>
    );
}
