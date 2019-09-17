import React, { useState } from 'react';
import { animated, config, useTrail } from 'react-spring';
import aws from 'simple-icons/icons/amazonaws';
import docker from 'simple-icons/icons/docker';
import firebase from 'simple-icons/icons/firebase';
import git from 'simple-icons/icons/git';
import gcp from 'simple-icons/icons/googlecloud';
import grafana from 'simple-icons/icons/grafana';
import graphql from 'simple-icons/icons/graphql';
import laravel from 'simple-icons/icons/laravel';
import mongodb from 'simple-icons/icons/mongodb';
import mysql from 'simple-icons/icons/mysql';
import netlify from 'simple-icons/icons/netlify';
import node from 'simple-icons/icons/node-dot-js';
import react from 'simple-icons/icons/react';
import redis from 'simple-icons/icons/redis';
import sass from 'simple-icons/icons/sass';
import vue from 'simple-icons/icons/vue-dot-js';
import styled from 'styled-components';
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
    const [stack] = useState([
        react,
        vue,
        sass,
        graphql,
        node,
        laravel,
        firebase,
        netlify,
        mongodb,
        mysql,
        redis,
        gcp,
        aws,
        git,
        grafana,
        docker
    ]);
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
