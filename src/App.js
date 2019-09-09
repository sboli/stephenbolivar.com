import React, { useState, useReducer } from 'react';
import Navbar from './components/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import AppContext, { appReducer } from './context';
import Menu from './components/Menu';
import items from './menu-items';
import { animated, useTransition, config } from 'react-spring';

const Root = styled.div`
    color: ${props => props.theme.textPrimary};
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.background};
`;

const Content = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    overflow: hidden;
`;

function App() {
    const [state, dispatch] = useReducer(appReducer, {
        isMenuOpen: false,
        activePage: 'home'
    });
    const transitions = useTransition(state.activePage, item => item, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.slow
    });
    /*
    return transitions.map(({ item, key, props }) =>
        item ? <animated.div style={props}>😄</animated.div> : <animated.div style={props}>🤪</animated.div>
    );
    */
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={theme}>
                <Root className="App">
                    <Menu></Menu>
                    <Navbar></Navbar>
                    <Content>
                        {transitions.map(({ item, key, props }) => {
                            const Page = items.filter(it => it.id === item)[0].component;
                            return <Page style={props} key={key}></Page>;
                        })}
                    </Content>
                </Root>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
