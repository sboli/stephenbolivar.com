import React from 'react';
import { animated, config, useTrail } from 'react-spring';
import styled from 'styled-components';
import device from '../mediaqueries';
import Pie from './Pie';
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
    align-self: start;
    @media ${device.tablet} {
        margin-top: 10vh;
    }
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    justify-content: center;
    align-content: center;
    grid-gap: 2rem;
    @media ${device.tablet} {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
    }
`;

export default function Skills({ style }) {
    const fromLeftStyle = useTrail(3, {
        from: { transform: 'translate3d(-100px, 0, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        config: config.slow
    });
    const fromRightStyle = useTrail(3, {
        from: { transform: 'translate3d(100px, 0, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        config: config.slow
    });
    const fromBottomStyle = useTrail(4, {
        from: { transform: 'translate3d(0, 100px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        config: config.slow
    });
    return (
        <Root style={style}>
            <h2 style={{ marginBottom: '2rem' }}>Compétences techniques</h2>
            <Technical>
                <ProgressBar style={fromLeftStyle[0]} title="ReactJS" progress={0.9}></ProgressBar>
                <ProgressBar style={fromRightStyle[0]} title="Javascript" progress={0.9}></ProgressBar>
                <ProgressBar style={fromLeftStyle[1]} title="PHP" progress={0.8}></ProgressBar>
                <ProgressBar style={fromRightStyle[1]} title="HTML/CSS" progress={0.75}></ProgressBar>
                <ProgressBar style={fromLeftStyle[2]} title="GNU/Linux" progress={0.9}></ProgressBar>
                <ProgressBar style={fromRightStyle[2]} title="Bureautique" progress={0.4}></ProgressBar>
            </Technical>

            <h2 style={{ marginBottom: '2rem', marginTop: '5rem' }}>Compétences professionnelles</h2>
            <Professional>
                <Pie style={fromBottomStyle[0]} title="Travail en  équipe" progress={0.9}></Pie>
                <Pie style={fromBottomStyle[1]} title="Gestion  de projet" progress={0.8}></Pie>
                <Pie style={fromBottomStyle[2]} title="Résolution de problèmes" progress={0.9}></Pie>
                <Pie style={fromBottomStyle[3]} title="Sens artistique" progress={0.6}></Pie>
            </Professional>
        </Root>
    );
}
