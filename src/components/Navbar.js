import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';
import Grid from 'hedron';

const StyledBounds = styled(Grid.Bounds)`
    margin-left: auto;
    margin-right: auto;
`;

const StyledMenuButton = styled(Grid.Bounds)`
    color: ${props => props.theme.textPrimary};
`;

export default function Navbar() {
    const [hamburgerClasses, setHamburgerClasses] = useState('hamburger hamburger--collapse');
    const handleMenuClick = e => {};

    return (
        <>
            <StyledBounds
                valign="center"
                wrap={true}
                direction="horizontal"
                halign="center"
                lg={{ width: '75%' }}
                sm={{ hidden: true }}
            >
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
            <StyledMenuButton lg={{ hidden: true }} md={{ hidden: true }} halign="right">
                <Grid.Box onClick={handleMenuClick}>
                    <button className={hamburgerClasses}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </Grid.Box>
            </StyledMenuButton>
        </>
    );
}
