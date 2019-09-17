import React from 'react';
import styled from 'styled-components';
import device from '../mediaqueries';
import about from '../data/about';

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
    padding: 20px;
    @media ${device.mobileS} {
        max-width: 100%;
    }
    @media ${device.mobileL} {
        max-width: 80%;
    }
    @media ${device.tablet} {
        max-width: 100%;
        max-height: 250px;
    }
`;

export default function AboutImage() {
    return (
        <Root>
            <Image src={about.image} alt=""></Image>
        </Root>
    );
}
