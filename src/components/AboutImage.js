import React from 'react';
import styled from 'styled-components';
import device from '../mediaqueries';

const Root = styled.div`
    grid-column: 1/3;
    grid-row: 1/2;
    @media ${device.tablet} {
        grid-column: 1/2;
        grid-row: 1/2;
    }
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: auto;
    padding: 40px;
    @media ${device.tablet} {
        padding: 70px;
    }
`;

export default function AboutImage() {
    return (
        <Root>
            <Image src="/images/web_developer.svg" alt=""></Image>
        </Root>
    );
}
