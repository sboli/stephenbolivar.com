import React from 'react';
import styled from 'styled-components';

const Ring = styled.div``;

const FaceImg = styled.img`
    display: block;
    height: 100%;
    width: auto;
    border-radius: 50%;
    padding: 7.5px;
`;

const Root = styled.div`
    background-color: red;
    width: 100%;
    height: 100%;
`;

const Outer = styled.div`
    border: 30px solid rgba(0, 0, 0, 0.04);
`;

const Inner = styled.div`
    width: 200px;
    height: 200px;
    background-color: #00000020;
    border-radius: 50%;
    margin: 7.5px;
`;

export default function HomeFace() {
    return (
        <>
            <Outer>
                <FaceImg src="/images/face.jpg"></FaceImg>
            </Outer>
        </>
    );
}
//
