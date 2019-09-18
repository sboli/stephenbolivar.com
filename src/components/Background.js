import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context';
import Particles from 'react-particles-js';
import particlesConfig from '../particlesjs-config.json';

export default function BackgroundParticles() {
    const { state } = useContext(AppContext);

    const Root = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -42;
        /*
        background-color: ${props => (state.activePage === 'home' ? 'transparent' : props.theme.background)};
        */
        background-color: ${props => props.theme.background};
    `;

    return (
        <Root>
            <Particles params={particlesConfig} width={'100%'} height={'100vh'}></Particles>
        </Root>
    );
}
