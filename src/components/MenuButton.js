import React, { useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
    padding: 0px;
`;

export default function MenuButton() {
    const [hamburgerClasses, setHamburgerClasses] = useState('hamburger hamburger--collapse');
    const handleMenuClick = e => {};

    return (
        <Root onClick={handleMenuClick}>
            <button className={hamburgerClasses} type="button" aria-label="Menu" aria-controls="navigation">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <nav id="navigation"></nav>
        </Root>
    );
}
