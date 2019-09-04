import React from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';
import Grid from 'hedron';
import device from '../mediaqueries';

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
        </>
    );
}
