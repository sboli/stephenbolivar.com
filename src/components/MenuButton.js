import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
    padding: 0px;
`;

export default function MenuButton({ onClick }) {
    const [hamburgerClasses, setHamburgerClasses] = useState('hamburger hamburger--collapse');

    return (
        <Root>
            <button
                onClick={onClick}
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
