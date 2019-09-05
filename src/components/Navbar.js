import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';
import Grid from 'hedron';
import device from '../mediaqueries';
import MenuButton from './MenuButton';

const TopMenu = styled.div`
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.tablet} {
        display: flex;
        max-width: 70%;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-around;
    }
    @media ${device.laptopL} {
        max-width: 60%;
    }
`;

const MenuButtonContainer = styled.div`
    @media ${device.mobileS} {
        display: flex;
        justify-content: end;
    }
    @media ${device.tablet} {
        display: none;
    }
`;

export default function Navbar() {
    const handleMenuClick = e => {};

    return (
        <>
            <TopMenu>
                <NavbarItem>Accueil</NavbarItem>
                <NavbarItem>À propos</NavbarItem>
                <NavbarItem>Compétences</NavbarItem>
                <NavbarItem>Expériences</NavbarItem>
                <NavbarItem>Portfolio</NavbarItem>
            </TopMenu>
            <MenuButtonContainer>
                <MenuButton></MenuButton>
            </MenuButtonContainer>
        </>
    );
}
