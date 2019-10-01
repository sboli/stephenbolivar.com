import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import AppContext from '../context';
import Particles from 'react-particles-js';
import particlesConfig from '../particlesjs-config.json';
import { animated, useTransition, config } from 'react-spring';

const Root = styled.div`
    z-index: -42;
    background-color: ${props => props.theme.background};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
`;

const ParticlesRoot = styled(animated.div)``;

export default function BackgroundParticles() {
    const { state } = useContext(AppContext);
    const [show, set] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            set(state.activePage === 'home');
        }, 1000);
    }, [state.activePage]);

    const transitions = useTransition(show, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses
    });

    return (
        <Root>
            {transitions.map(
                ({ item, key, props }) =>
                    item && (
                        <ParticlesRoot key={key} style={props}>
                            <Particles params={particlesConfig} width={'100%'} height={'99.5vh'}></Particles>
                        </ParticlesRoot>
                    )
            )}
        </Root>
    );
}
