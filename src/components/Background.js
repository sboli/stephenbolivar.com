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
    height: 100%;
`;

const ParticlesRoot = styled(animated.div)``;

export default function BackgroundParticles() {
    const { state } = useContext(AppContext);

    useEffect(() => {
        set(state.activePage === 'home');
    }, [state.activePage]);

    const [show, set] = useState(false);
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
                            <Particles params={particlesConfig} width={'100%'} height={'100vh'}></Particles>
                        </ParticlesRoot>
                    )
            )}
        </Root>
    );
}
