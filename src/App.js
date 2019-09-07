import React from 'react';
import Navbar from './components/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import './App.scss';
import Home from './components/Home';
import About from './components/About';

const Root = styled.div`
    color: ${props => props.theme.textPrimary};
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    width: 100vw;
`;

const Content = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Root className="App">
                <Navbar></Navbar>
                <Content>
                    <Home></Home>
                </Content>
            </Root>
        </ThemeProvider>
    );
}

export default App;
