import React from 'react';
import styled from 'styled-components';
import device from '../mediaqueries';

const Root = styled.div`
    grid-column: 1/3;
    grid-row: 2/3;
    padding: 40px;
    align-self: start;
    @media ${device.tablet} {
        grid-column: 2/3;
        grid-row: 1/2;
        align-self: center;
    }
`;

export default function AboutText() {
    return (
        <Root>
            Je suis Stephen, développeur fullstack particulièrement intéressé par les stack techniques full Javascript
            et les architectures microservices et serverless.
        </Root>
    );
}
