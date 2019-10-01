import React from 'react';
import styled from 'styled-components';
import HomeInfoContact from './HomeInfoContact';
import { device } from '../mediaqueries';
import { animated } from 'react-spring';
import { info } from '../data/home';

const Root = styled(animated.section)`
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
        justify-self: end;
        margin-right: 3rem;
    }
    @media ${device.laptop} {
        margin-right: 7rem;
    }
    @media ${device.laptop} {
        font-size: 1.33em;
    }
`;

export default function HomeTitle({ style }) {
    return (
        <Root style={style}>
            <h1>{info.name}</h1>
            <h3>{info.title}</h3>
            <HomeInfoContact icon="phone" text={info.prettyPhone} href={info.phone}></HomeInfoContact>
            <HomeInfoContact icon="mail" text={info.mail} href={`mailto:${info.mail}`}></HomeInfoContact>
        </Root>
    );
}
