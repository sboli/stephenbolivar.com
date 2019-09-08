import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';
import device from '../mediaqueries';
import MenuButton from './MenuButton';
import AppContext from '../context';

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
    const { state, dispatch } = useContext(AppContext);
    const handleClick = page => {
        return e => {
            dispatch({ type: 'SET_PAGE', activePage: page });
        };
    };
    return (
        <>
            <TopMenu>
                <NavbarItem active={state.activePage === 'home'} onClick={handleClick('home')}>
                    Accueil
                </NavbarItem>
                <NavbarItem active={state.activePage === 'about'} onClick={handleClick('about')}>
                    À propos
                </NavbarItem>
                <NavbarItem active={state.activePage === 'skills'} onClick={handleClick('skills')}>
                    Compétences
                </NavbarItem>
                <NavbarItem active={state.activePage === 'experiences'} onClick={handleClick('experiences')}>
                    Expériences
                </NavbarItem>
                <NavbarItem active={state.activePage === 'portfolio'} onClick={handleClick('portfolio')}>
                    Portfolio
                </NavbarItem>
            </TopMenu>
            <MenuButton></MenuButton>
        </>
    );
}
