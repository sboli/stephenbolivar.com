import React from 'react';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';
import { device } from '../mediaqueries';
import ExperiencesMission from './ExperiencesMission';
import missions from '../missions';
import education from '../education';
import ExperiencesEducation from './ExperiencesEducation';

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
    @media ${device.laptop} {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
    }
    padding: 1rem;
    grid-gap: 2rem;
    grid-column-gap: 4rem;
`;

const MissionsTitle = styled(animated.h1)`
    grid-column: 1/3;
    grid-row: 1/2;
    margin-top: 2rem;
`;

const Missions = styled(animated.div)`
    display: grid;
    grid-template-rows: repeat(auto-fill, auto);
    grid-gap: 3rem;
    grid-column: 1/3;
    grid-row: 2/3;
    grid-template-columns: 1fr;

    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr;
    }
    align-content: start;
    align-items: start;
`;

const EducationTitle = styled(animated.h1)`
    grid-column: 1/3;
    grid-row: 3/4;
    margin-top: 2rem;
`;

const Education = styled(animated.div)`
    display: grid;
    grid-template-columns: 1fr;

    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr;
    }
    grid-template-rows: repeat(auto-fill, auto);
    grid-gap: 3rem;
    grid-column: 1/3;
    justify-self: center;
`;

export default function Experiences({ style }) {
    const titleStyle = useSpring({
        from: {
            transform: 'translate3d(-100px, 0, 0)',
            opacity: 0,
            width: '10%'
        },
        to: {
            transform: 'translate3d(0, 0, 0)',
            opacity: 1,
            width: '100%'
        },
        config: config.slow
    });
    return (
        <Root style={style}>
            <MissionsTitle style={titleStyle}>Missions</MissionsTitle>
            <Missions>
                {missions.map(it => (
                    <ExperiencesMission key={it.title} {...it}></ExperiencesMission>
                ))}
            </Missions>
            <EducationTitle style={titleStyle}>Éducation</EducationTitle>
            <Education>
                {education.map(it => (
                    <ExperiencesEducation key={it.title} {...it}></ExperiencesEducation>
                ))}
            </Education>
        </Root>
    );
}
