import React from 'react';
import styled from 'styled-components';
import { animated, useTrail, config } from 'react-spring';
import { device } from '../mediaqueries';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

const Root = styled(animated.div)`
    grid-column: 1/2;
    grid-row: 2/3;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fill, auto);
    @media ${device.laptopL} {
        max-width: 70%;
    }
    @media ${device.laptop} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto auto;
    }
    padding: 1rem;
    grid-gap: 2rem;
    grid-column-gap: 4rem;
    align-self: start;
    margin-top: 20vh;
`;

export default function Portfolio({ style }) {
    const springs = useTrail(portfolio.length, {
        from: { opacity: 0, transform: 'translate3d(-20px, 40px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' },
        config: config.stiff
    });
    return (
        <Root style={style}>
            {springs.map((props, index) => {
                const it = portfolio[index];
                return (
                    <PortfolioItem
                        style={props}
                        key={it.title}
                        title={it.title}
                        image={it.image}
                        url={it.url}
                        description={it.description}
                    ></PortfolioItem>
                );
            })}
        </Root>
    );
}
