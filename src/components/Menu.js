import React, { useContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import AppContext from '../context';
import { useSpring, animated, config, useChain } from 'react-spring';
import MenuButtonExit from './MenuButtonExit';
import MenuRow from './MenuRow';

const Root = styled(animated.div)`
    color: ${props => props.theme.textPrimary};
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100vh;
    z-index: 99;
    background-color: #fafafa;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr repeat(5, 2fr) 1fr;
    grid-gap: 2rem;
`;

const Backdrop = styled(animated.div)`
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100vh;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.7);
`;

export default function Menu() {
    const { state } = useContext(AppContext);
    const [first, setFirst] = useState(true);
    const style = useSpring({
        config: config.slow,
        to: {
            width: state.isMenuOpen ? '100%' : '0%'
        },
        from: { width: !state.isMenuOpen && !first ? '100%' : '0%' },
        delay: 150
    });
    const backdropStyle = useSpring({
        config: config.slow,
        to: {
            opacity: state.isMenuOpen ? 1 : 0
        },
        from: {
            opacity: !state.isMenuOpen ? 1 : 0
        }
    });

    const closeStyle = useSpring({
        to: {
            opacity: state.isMenuOpen ? 1 : 0
        },
        from: {
            opacity: !state.isMenuOpen ? 1 : 0
        },
        delay: 600
    });
    useEffect(() => {
        setFirst(false);
    }, []);

    return (
        <>
            {state.isMenuOpen && <Backdrop style={backdropStyle}></Backdrop>}
            <Root style={style}>
                <animated.div style={closeStyle}>{state.isMenuOpen && <MenuButtonExit></MenuButtonExit>}</animated.div>
                <MenuRow active={state.activePage === 'home'}>Accueil</MenuRow>
                <MenuRow active={state.activePage === 'about'}>À propos</MenuRow>
                <MenuRow active={state.activePage === 'skills'}>Compétences</MenuRow>
                <MenuRow active={state.activePage === 'experiences'}>Expériences</MenuRow>
                <MenuRow active={state.activePage === 'portfolio'}>Portfolio</MenuRow>
                <div></div>
            </Root>
        </>
    );
}
