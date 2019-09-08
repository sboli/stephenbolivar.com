import React, { useState, useReducer } from 'react';
import Navbar from './components/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import AppContext, { appReducer } from './context';
import Menu from './components/Menu';

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
`;

function App() {
    const [state, dispatch] = useReducer(appReducer, {
        isMenuOpen: false
    });
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <ThemeProvider theme={theme}>
                <Root className="App">
                    <Menu></Menu>
                    <Navbar></Navbar>
                    <Content>
                        <Home></Home>
                    </Content>
                </Root>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
