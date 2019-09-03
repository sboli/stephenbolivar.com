import React from 'react';
import Navbar from './components/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import Grid from 'hedron';
import theme from './theme';
import './App.scss';

const Root = styled.div`
    color: ${props => props.theme.textPrimary};
    font-family: 'Montserrat', sans-serif;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Grid.Provider padding="20px" breakpoints={{ sm: '-500', md: '501-750', lg: '+750' }}>
                <Root className="App">
                    <Navbar></Navbar>
                </Root>
            </Grid.Provider>
        </ThemeProvider>
    );
}

export default App;
