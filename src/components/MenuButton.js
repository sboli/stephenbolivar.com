import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppContext from '../context';

const Root = styled.div`
    padding: 0px;
`;

export default function MenuButton() {
    const [hamburgerClasses, setHamburgerClasses] = useState('hamburger hamburger--collapse');
    const { dispatch } = useContext(AppContext);

    return (
        <Root>
            <button
                onClick={e => dispatch({ type: 'TOGGLE_MENU' })}
                className={hamburgerClasses}
                type="button"
                aria-label="Menu"
                aria-controls="navigation"
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <nav id="navigation"></nav>
        </Root>
    );
}

MenuButton.propTypes = {
    onClick: PropTypes.func.isRequired
};
