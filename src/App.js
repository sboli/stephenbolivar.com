import React, { useReducer } from 'react';
import { config, useTransition } from 'react-spring';
import styled, { ThemeProvider } from 'styled-components';
import './App.scss';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import AppContext, { appReducer } from './context';
import items from './data/menu-items';
import theme from './theme';
import Background from './components/Background';

const Root = styled.main`
    color: ${props => props.theme.textPrimary};
    font-family: 'Montserrat', sans-serif;
    display: grid;
    grid-template-rows: 60px auto;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    min-height: 100vh;
    overflow-x: hidden;
`;

function App() {
    const [state, dispatch] = useReducer(appReducer, {
        isMenuOpen: false,
        activePage: process.env.NODE_ENV === 'production' ? 'home' : 'home'
    });
    const transitions = useTransition(state.activePage, item => item, {
        from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
        config: config.default
    });
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={theme}>
                <Root className="App">
                    <Background></Background>
                    <Menu></Menu>
                    <Navbar></Navbar>
                    {transitions.map(({ item, key, props }) => {
                        const Page = items.filter(it => it.id === item)[0].component;
                        return <Page style={props} key={key}></Page>;
                    })}
                </Root>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
