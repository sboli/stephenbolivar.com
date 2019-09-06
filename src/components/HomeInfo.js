import React from 'react';
import styled from 'styled-components';
import HomeInfoContact from './HomeInfoContact';

const Root = styled.div`
    font-weight: bold;
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
`;

export default function HomeTitle() {
    return (
        <Root>
            <h1>Stephen BOLIVAR</h1>
            <h3>Développeur fullstack</h3>
            <HomeInfoContact icon="phone" text="+590 690 86 19 09" href="tel:+590690861909"></HomeInfoContact>
            <HomeInfoContact
                icon="mail"
                text="hello@stephenbolivar.com"
                href="mailto:hello@stephenbolivar.com"
            ></HomeInfoContact>
        </Root>
    );
}
