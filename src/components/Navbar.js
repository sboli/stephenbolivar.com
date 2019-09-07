import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';
import Grid from 'hedron';
import device from '../mediaqueries';
import MenuButton from './MenuButton';

const TopMenu = styled.div`
    margin-left: auto;
    margin-right: auto;
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.tablet} {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;
    }
    @media ${device.laptopL} {
        max-width: 60%;
    }
`;

const MenuButtonContainer = styled.div`
    @media ${device.mobileS} {
        width: 100%;
        display: block;
        text-align: right;
        height: 8vh;
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
