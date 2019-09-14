import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppContext from '../context';
import device from '../mediaqueries';
import Icon from './Icon';

const Root = styled.div`
    position: absolute;
    left: 0;
    top: 0;
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

export default function MenuButton() {
    const { state, dispatch } = useContext(AppContext);

    return (
        <Root>
            <nav>
                <StyledButton
                    onClick={e => dispatch({ type: 'TOGGLE_MENU' })}
                    type="button"
                    aria-label="Menu"
                    aria-controls="navigation"
                >
                    <Icon name={'menu'}></Icon>
                </StyledButton>
            </nav>
        </Root>
    );
}
