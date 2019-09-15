import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { device } from '../mediaqueries';
import ExperiencesMission from './ExperiencesMission';
import missions from '../missions';

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
    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
    }
    padding: 1rem;
    grid-gap: 2rem;
`;

const MissionsTitle = styled(animated.h2)`
    grid-column: 1/2;
    grid-row: 1/2;
`;

const Missions = styled(animated.div)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, auto);
    grid-gap: 2rem;
    grid-column: 1/2;
    grid-row: 2/3;
`;

const Education = styled(animated.div)`
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

export default function Experiences({ style }) {
    return (
        <Root style={style}>
            <MissionsTitle>Missions</MissionsTitle>
            <Missions>
                {missions.map(it => (
                    <ExperiencesMission {...it}></ExperiencesMission>
                ))}
            </Missions>
            <Education></Education>
            <h2 style={{ marginBottom: '2rem', marginTop: '5rem' }}>Éducation</h2>
        </Root>
    );
}
