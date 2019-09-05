import React from 'react';
import Navbar from './components/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import './App.scss';
import Home from './components/Home';

const Root = styled.div`
    color: ${props => props.theme.textPrimary};
    font-family: 'Montserrat', sans-serif;
    padding: 20px;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Root className="App">
                <Navbar></Navbar>
                <Home></Home>
            </Root>
        </ThemeProvider>
    );
}

export default App;
