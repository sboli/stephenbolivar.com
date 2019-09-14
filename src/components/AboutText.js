import React from 'react';
import styled from 'styled-components';
import device from '../mediaqueries';

const Root = styled.div`
    grid-column: 1/3;
    grid-row: 2/3;
    padding: 20px;
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
    return (
        <Root>
            Je suis Stephen, développeur particulièrement intéressé par les stack full Javascript ainsi que les
            architectures microservices et serverless.
        </Root>
    );
}
