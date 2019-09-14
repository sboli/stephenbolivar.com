import React from 'react';
import device from '../mediaqueries';
import { animated } from 'react-spring';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const Root = styled(animated.div)`
    grid-column: 1/2;
    grid-row: 2/3;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    @media ${device.laptopL} {
        max-width: 70%;
    }
    padding: 1rem;
`;

const Technical = styled(animated.div)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    @media ${device.tablet} {
        grid-column-gap: 4rem;
        grid-row-gap: 1rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 1fr);
    }
`;

const Professional = styled(animated.div)`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }
`;

export default function Skills({ style }) {
    return (
        <Root style={style}>
            <h2 style={{ marginBottom: '2rem' }}>Compétences techniques</h2>
            <Technical>
                <ProgressBar title="ReactJS" progress={0.9}></ProgressBar>
                <ProgressBar title="Javascript" progress={0.9}></ProgressBar>
                <ProgressBar title="PHP" progress={0.8}></ProgressBar>
                <ProgressBar title="HTML/CSS" progress={0.75}></ProgressBar>
                <ProgressBar title="GNU/Linux" progress={0.9}></ProgressBar>
                <ProgressBar title="Bureautique" progress={0.4}></ProgressBar>
            </Technical>

            <h2 style={{ marginBottom: '2rem', marginTop: '5rem' }}>Compétences professionnelles</h2>
            <Professional></Professional>
        </Root>
    );
}
