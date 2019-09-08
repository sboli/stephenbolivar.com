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
    @media ${device.tablet} {
        grid-column: 2;
        grid-row: 2/5;
        height: 75%;
        justify-self: left;
    }
`;

const FaceImg = animated(FaceImgStyle);

export default function HomeFace() {
    const props = useSpring({
        config: config.slow,
        to: {
            opacity: 1
        },
        from: { opacity: 0 }
    });
    return <FaceImg style={props} src="/images/face.jpg"></FaceImg>;
}
