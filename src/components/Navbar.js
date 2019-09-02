import React from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';
import Grid from 'hedron';

const Root = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

const StyledBounds = styled(Grid.Bounds)`
    margin-left: auto;
    margin-right: auto;
`;

export default function Navbar() {
    return (
        <Root>
            <StyledBounds valign="center" wrap={true} direction="horizontal" halign="center" lg={{ width: '75%' }}>
                <Grid.Box fill={true}>
                    <NavbarItem>Accueil</NavbarItem>
                </Grid.Box>
                <Grid.Box fill={true}>
                    <NavbarItem>À propos</NavbarItem>
                </Grid.Box>
                <Grid.Box fill={true}>
                    <NavbarItem>Compétences</NavbarItem>
                </Grid.Box>
                <Grid.Box fill={true}>
                    <NavbarItem>Expériences</NavbarItem>
                </Grid.Box>
                <Grid.Box fill={true}>
                    <NavbarItem>Portfolio</NavbarItem>
                </Grid.Box>
            </StyledBounds>
        </Root>
    );
}
