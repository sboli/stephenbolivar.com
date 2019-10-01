import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { device } from '../mediaqueries';
import Icon from './Icon';

/**
 * Each image must be a 600x250 rectangle
 */

const Root = styled(animated.div)`
    max-height: 400px;
    ${device.laptop} {
        max-width: 400px;
        height: auto;
        max-height: 240px;
    }
    box-shadow: 1px;
    box-shadow: 5px 5px 5px lightgray;
    border: 1px solid lightgray;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Overlay = styled(animated.div)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.94);
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
    overflow: scroll;
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
    padding-bottom: 2rem;
`;

const LinkIcon = styled(animated.div)`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 1rem;
    cursor: pointer;
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
            //next({ filter: hovered ? 'blur(15px)' : 'blur(0px)' });
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

    const openLink = () => {
        if (typeof window != 'undefined') {
            window.open(url, '_blank');
        }
    };

    return (
        <Root
            style={{ ...style, ...hoverStyle }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setHovered(!hovered)}
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
            {url && (
                <LinkIcon style={titleStyle} onClick={openLink}>
                    <Icon name="external-link" size="24"></Icon>
                </LinkIcon>
            )}
            <Img src={image} alt={description}></Img>
        </Root>
    );
}
