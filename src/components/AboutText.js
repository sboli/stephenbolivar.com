import React from 'react';
import styled from 'styled-components';
import device from '../mediaqueries';
import about from '../data/about';

const Root = styled.div`
    grid-column: 1/3;
    grid-row: 2/3;
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    align-self: start;
    @media ${device.tablet} {
        grid-column: 2/3;
        grid-row: 1/2;
        align-self: center;
    }

    @media ${device.desktop} {
        padding: 70px;
    }
`;

export default function AboutText() {
    return <Root>{about.htmlContent}</Root>;
}
