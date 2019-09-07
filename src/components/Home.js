import React from 'react';
import styled from 'styled-components';
import HomeFace from './HomeFace';
import HomeInfo from './HomeInfo';

import { device } from '../mediaqueries';

const Root = styled.div`
    height: 92vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 10% 30% 5% 15% 15%;
`;

const StyledHomeFace = styled.div``;

const StyledHomeInfo = styled.div``;

export default function Home() {
    return (
        <Root>
            <HomeFace></HomeFace>
            <HomeInfo></HomeInfo>
        </Root>
    );
}
