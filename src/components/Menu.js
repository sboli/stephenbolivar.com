import React, { useContext, useEffect, useState } from 'react';
import { animated, config, useSpring, useTransition } from 'react-spring';
import styled from 'styled-components';
import AppContext from '../context';
import items from '../data/menu-items';
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
    overflow: hidden;
    align-items: stretch;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px ${props => props.theme.textPrimary};
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
    const { state, dispatch } = useContext(AppContext);
    const [first, setFirst] = useState(true);
    const [menuItems, setMenuItems] = useState([]);
    const style = useSpring({
        config: config.default,
        to: {
            width: state.isMenuOpen ? '100%' : '0%'
        },
        from: { width: !state.isMenuOpen && !first ? '100%' : '0%' },
        delay: state.isMenuOpen ? 200 : 150
    });
    const backdropStyle = useSpring({
        config: config.stiff,
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
        delay: 500
    });
    useEffect(() => {
        setFirst(false);
    }, []);

    useEffect(() => {
        if (state.isMenuOpen) {
            setMenuItems(items);
        } else {
            setMenuItems([]);
        }
    }, [state.isMenuOpen]);

    const handleClick = page => {
        return e => {
            dispatch({ type: 'SET_PAGE', activePage: page });
        };
    };
    const transitions = useTransition(menuItems, item => item.id, {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
        leave: { opacity: 0 },
        trail: 150,
        reset: state.isMenuOpen
    });

    return (
        <>
            {state.isMenuOpen && <Backdrop style={backdropStyle}></Backdrop>}
            <Root style={style}>
                <animated.div style={closeStyle}>{state.isMenuOpen && <MenuButtonExit></MenuButtonExit>}</animated.div>
                {transitions.map(({ item, props, key }) => (
                    <MenuRow
                        style={props}
                        key={key}
                        active={state.activePage === item.id}
                        onClick={handleClick(item.id)}
                    >
                        {item.title}
                    </MenuRow>
                ))}
                <div></div>
            </Root>
        </>
    );
}
