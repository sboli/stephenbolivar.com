import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';
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

export default function Navbar() {
    return (
        <>
            <TopMenu>
                <NavbarItem>Accueil</NavbarItem>
                <NavbarItem>À propos</NavbarItem>
                <NavbarItem>Compétences</NavbarItem>
                <NavbarItem>Expériences</NavbarItem>
                <NavbarItem>Portfolio</NavbarItem>
            </TopMenu>
            <MenuButton></MenuButton>
        </>
    );
}
