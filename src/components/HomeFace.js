import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const FaceImgImpl = styled.img`
    display: block;
    height: 100%;
    width: auto;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 0 15px hsl(0, 0%, 85%), 0 0 0 30px hsl(0, 0%, 95%);
`;

const FaceImg = animated(FaceImgImpl);

export default function HomeFace() {
    const props = useSpring({
        config: config.slow,
        to: {
            opacity: 1
        },
        from: { opacity: 0 }
    });
    return (
        <>
            <FaceImg style={props} src="/images/face.jpg"></FaceImg>
        </>
    );
}
//
