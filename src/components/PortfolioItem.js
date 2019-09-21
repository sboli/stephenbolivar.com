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

const Informations = styled(animated.div)`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${props => props.theme.textPrimary};
    padding: 2rem;
    grid-gap: 1rem;
`;

const Title = styled(animated.div)`
    grid-column: 1/3;
    grid-row: 1/2;
    width: 100%;
    font-weight: bold;
    font-size: 1.33rem;
    text-align: center;
    color: ${props => props.theme.textPrimary};
`;

const Description = styled(animated.div)`
    grid-column: 1/3;
    grid-row: 2/3;
    color: ${props => props.theme.textSecondary};
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
            <Overlay style={overlayStyle}></Overlay>
            <Informations style={titleStyle}>
                <Title>{title}</Title>
                <Description>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: description
                        }}
                    ></div>
                </Description>
            </Informations>
            <Img src={image}></Img>
        </Root>
    );
}
