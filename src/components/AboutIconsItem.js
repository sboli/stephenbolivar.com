import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
import { useSpring, animated as a } from 'react-spring';
import device from '../mediaqueries';

const Root = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    max-width: 100px;
    @media ${device.laptop} {
    }
`;

const Icon = styled.div`
    cursor: pointer;
    will-change: transform, opacity;
    width: 100%;
    height: auto;
    fill: ${theme.textPrimary};
`;

const AnimatedIcon = a(Icon);
const Info = styled.div`
    position: absolute;
`;
const AnimatedInfo = a(Info);

function AboutIconsItem({ title, svg, url }) {
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 300, friction: 60 }
    });
    const toggle = () => set(state => !state);
    return (
        <Root onMouseEnter={toggle} onMouseLeave={toggle} onClick={toggle}>
            <AnimatedInfo style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                <strong>{title}</strong>
            </AnimatedInfo>
            <AnimatedIcon
                dangerouslySetInnerHTML={{ __html: svg }}
                style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
            ></AnimatedIcon>
        </Root>
    );
}

AboutIconsItem.propTypes = {
    title: PropTypes.string.isRequired,
    svg: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default AboutIconsItem;
