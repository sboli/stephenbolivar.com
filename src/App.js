import React, { useReducer } from 'react';
import { config, useTransition } from 'react-spring';
import styled, { ThemeProvider } from 'styled-components';
import './App.scss';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import AppContext, { appReducer } from './context';
import items from './menu-items';
import theme from './theme';

const Root = styled.div`
    color: ${props => props.theme.textPrimary};
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.background};
`;

const Content = styled.div`
    display: grid;
    padding: 1rem;
    height: 92vh;
    grid-template-areas: 'main';
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    overflow-x: hidden;
    overflow-y: visible;
    z-index: 500;
`;

function App() {
    const [state, dispatch] = useReducer(appReducer, {
        isMenuOpen: false,
        activePage: 'about'
    });
    const transitions = useTransition(state.activePage, item => item, {
        from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
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
