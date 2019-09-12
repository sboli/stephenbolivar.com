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
    height: auto;
    margin-left: auto;
    margin-right: auto;
    @media ${device.mobileS} {
        max-width: 100%;
        padding: 20px;
    }
    @media ${device.mobileL} {
        padding: 40px;
        max-width: 80%;
    }
    @media ${device.tablet} {
        padding: 70px;
        max-width: 100%;
    }
`;

export default function AboutImage() {
    return (
        <Root>
            <Image src="/images/web_developer.svg" alt=""></Image>
        </Root>
    );
}
