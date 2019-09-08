import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    text-align: center;
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    flex-basis: 20%;
`;

const NavbarItemLink = styled.a`
    display: block;
    text-decoration: none;
    width: 100%;
    &:hover {
        font-weight: bold;
    }
`;

export default function NavbarItem({ children, onClick, active }) {
    return (
        <Root onClick={onClick} style={{ fontWeight: active ? 'bold' : 'normal' }}>
            <NavbarItemLink>{children}</NavbarItemLink>
        </Root>
    );
}
