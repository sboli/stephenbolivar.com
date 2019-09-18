import React from 'react';
import { animated, config, useTrail, useSpring } from 'react-spring';
import styled from 'styled-components';
import education from '../data/education';
import { device } from '../mediaqueries';
import missions from '../data/missions';
import ExperiencesEducation from './ExperiencesEducation';
import ExperiencesMission from './ExperiencesMission';

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
    background-color: ${props => props.theme.background};
`;

const MissionsTitle = styled(animated.h1)`
    grid-column: 1/3;
    grid-row: 1/2;
    margin-top: 2rem;
    border-bottom: 3px solid ${props => props.theme.primary};
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
    border-bottom: 3px solid ${props => props.theme.primary};
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
    const missionsStyle = useTrail(missions.length, {
        from: { opacity: 0, transform: 'translate3d(-20px, 40px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' },
        config: config.stiff
    });
    const experiencesStyle = useTrail(education.length, {
        from: { opacity: 0, transform: 'translate3d(-20px, 40px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' },
        config: config.stiff,
        delay: 500
    });
    const titleStyle = useSpring({
        from: {
            width: '0%'
        },
        to: {
            width: '100%'
        },
        config: config.molasses
    });
    return (
        <Root style={style}>
            <MissionsTitle style={titleStyle}>Missions</MissionsTitle>
            <Missions>
                {missions.map((it, index) => (
                    <ExperiencesMission style={missionsStyle[index]} key={it.title} {...it}></ExperiencesMission>
                ))}
            </Missions>
            <EducationTitle style={titleStyle}>Éducation</EducationTitle>
            <Education>
                {education.map((it, index) => (
                    <ExperiencesEducation style={experiencesStyle[index]} key={it.title} {...it}></ExperiencesEducation>
                ))}
            </Education>
        </Root>
    );
}
