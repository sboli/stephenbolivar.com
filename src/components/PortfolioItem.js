import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { device } from '../mediaqueries';

/**
 * Each image must be a 600x250 rectangle
 */

const Root = styled(animated.div)`
    ${device.tablet} {
        max-width: 400px;
        height: auto;
    }
    box-shadow: 1px;
    box-shadow: 5px 5px 5px lightgray;
    border: 1px solid lightgray;
    cursor: pointer;
    max-height: 250px;
    overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
`;

const Overlay = styled(animated.div)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.85);
`;

const Title = styled(animated.div)`
    position: absolute;
    left: 0;
    top: 40%;
    width: 100%;
    text-align: center;
    height: auto;
    font-weight: bold;
    font-size: 1.33rem;
    color: ${props => props.theme.textPrimary};
`;

export default function PortfolioItem({ style, title, image, url, description }) {
    const [hovered, setHovered] = useState(false);

    const hoverStyle = useSpring({
        from: {
            transform: 'scale(1)'
        },
        to: {
            transform: hovered ? 'scale(1.05)' : 'scale(1)'
        }
    });

    const overlayStyle = useSpring({
        from: { opacity: 0 },
        to: async (next, cancel) => {
            next({ filter: hovered ? 'blur(15px)' : 'blur(0px)' });
            next({ opacity: hovered ? 1 : 0 });
            //await next({ transform: hovered ? 'scale(1.05)' : 'scale(1)' });
        }
    });

    const titleStyle = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0, 40px, 0)'
        },
        to: {
            opacity: hovered ? 1 : 0,
            transform: 'translate3d(0, 0px, 0)'
        }
    });

    return (
        <Root
            style={{ ...style, ...hoverStyle }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Img src={image + '.png'}></Img>
            <Overlay style={overlayStyle}></Overlay>
            <Title style={titleStyle}>{title}</Title>
        </Root>
    );
}
