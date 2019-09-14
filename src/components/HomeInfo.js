import React from 'react';
import styled from 'styled-components';
import HomeInfoContact from './HomeInfoContact';
import { device } from '../mediaqueries';

const Root = styled.div`
    grid-column: 1/3;
    grid-row: 4;
    justify-content: right;
    font-weight: bold;
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-top: 3rem;

    @media ${device.tablet} {
        grid-column: 1;
        grid-row: 2/5;
        align-self: center;
        justify-self: center;
    }
    @media ${device.laptop} {
        font-size: 1.33em;
    }
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
