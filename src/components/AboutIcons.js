import React from 'react';
import { animated, config, useTrail } from 'react-spring';
import styled from 'styled-components';
import about from '../about';
import device from '../mediaqueries';
import AboutIconsItem from './AboutIconsItem';

const Root = styled(animated.div)`
    grid-column: 1/3;
    grid-row: 3/4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    align-content: center;
    @media ${device.tablet} {
        grid-template-columns: repeat(8, auto);
        grid-template-rows: 1fr 1fr;
        justify-items: center;
        margin-top: 70px;
    }
    @media ${device.laptopL} {
    }
`;

export default function AboutIcons({ style }) {
    const stack = about.stack;
    const springs = useTrail(stack.length, {
        from: { opacity: 0, transform: 'translate3d(-20px, 40px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' },
        config: config.stiff
    });
    return (
        <Root style={style}>
            {springs.map((props, index) => {
                const it = stack[index];
                return (
                    <AboutIconsItem
                        style={props}
                        key={it.title}
                        title={it.title}
                        svg={it.svg}
                        url={it.url}
                    ></AboutIconsItem>
                );
            })}
        </Root>
    );
}
