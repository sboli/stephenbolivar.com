import React from 'react';
import styled from 'styled-components';
import HomeFace from './HomeFace';
import HomeInfo from './HomeInfo';

const Root = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 30% 5% 15% 15%;
`;

export default function Home() {
    return (
        <Root>
            <div></div>
            <HomeFace></HomeFace>
            <div></div>
            <HomeInfo></HomeInfo>
        </Root>
    );
}
