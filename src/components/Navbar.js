import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context';
import device from '../mediaqueries';
import items from '../menu-items';
import MenuButton from './MenuButton';
import NavbarItem from './NavbarItem';

const TopMenu = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    grid-row: 1/2;
    grid-column: 1/2;
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
                {items.map(it => (
                    <NavbarItem key={it.id} active={state.activePage === it.id} onClick={handleClick(it.id)}>
                        {it.title}
                    </NavbarItem>
                ))}
            </TopMenu>
            <MenuButton></MenuButton>
        </>
    );
}
