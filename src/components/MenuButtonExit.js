import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context';
import device from '../mediaqueries';
import Icon from './Icon';

const Root = styled.div`
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

const StyledButton = styled.button`
    padding: 20px 20px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
`;

export default function MenuButtonExit() {
    const { dispatch } = useContext(AppContext);

    return (
        <Root>
            <StyledButton
                onClick={e => dispatch({ type: 'TOGGLE_MENU' })}
                type="button"
                aria-label="Menu"
                aria-controls="navigation"
            >
                <Icon name={'x'}></Icon>
            </StyledButton>
            <nav id="navigation"></nav>
        </Root>
    );
}
