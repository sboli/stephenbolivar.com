import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import { device } from '../mediaqueries';
import HomeFace from './HomeFace';
import HomeInfo from './HomeInfo';

const Root = styled(animated.div)`
  grid-row: 1/3;
  grid-column: 1/2;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-row-gap: 1rem;
  padding: 1rem;
  align-self: start;
  margin-top: 20vh;
  @media ${device.tablet} {
    margin-top: 25vh;
  }
`;

export default function Home({ style }) {
  return (
    <Root>
      <HomeFace></HomeFace>
      <HomeInfo></HomeInfo>
    </Root>
  );
}
