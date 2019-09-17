import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { device } from '../mediaqueries';

const FaceImgStyle = styled.img`
    grid-column: 1/3;
    grid-row: 2;
    justify-self: center;
    align-self: center;
    object-fit: cover;
    height: 100%;
    width: auto;
    border-radius: 50%;
    box-shadow: 0 0 0 15px hsl(0, 0%, 85%), 0 0 0 30px hsl(0, 0%, 95%);
    @media ${device.mobileS} {
        max-width: 50%;
    }

    @media ${device.tablet} {
        grid-column: 2;
        max-width: 80%;
        grid-row: 2/5;
        height: 75%;
        justify-self: center;
    }
`;

const FaceImg = animated(FaceImgStyle);

export default function HomeFace({ style }) {
    return <FaceImg style={style} src="/images/face.jpg"></FaceImg>;
}
