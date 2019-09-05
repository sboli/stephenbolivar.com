import React from 'react';
import styled from 'styled-components';

const FaceImg = styled.img`
    display: block;
    height: 100%;
    width: auto;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 0 15px hsl(0, 0%, 85%), 0 0 0 30px hsl(0, 0%, 95%);
`;

export default function HomeFace() {
    return (
        <>
            <FaceImg src="/images/face.jpg"></FaceImg>
        </>
    );
}
//
