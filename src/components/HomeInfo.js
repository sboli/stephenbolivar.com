import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    font-weight: bold;
    justify-self: center;
`;

export default function HomeTitle() {
    return (
        <Root>
            <h1>Stephen BOLIVAR</h1>
            <h3>Développeur fullstack</h3>
            <p>
                <a href="tel:0690861909">0690 86 19 09</a>
            </p>
            <p>
                <a href="mailto:hello@stephenbolivar.com">hello@stephenbolivar.com</a>
            </p>
        </Root>
    );
}
