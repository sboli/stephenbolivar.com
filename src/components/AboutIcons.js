import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../mediaqueries';
import react from 'simple-icons/icons/react';
import graphql from 'simple-icons/icons/graphql';
import vue from 'simple-icons/icons/vue-dot-js';
import node from 'simple-icons/icons/node-dot-js';
import laravel from 'simple-icons/icons/laravel';
import sass from 'simple-icons/icons/sass';
import mongodb from 'simple-icons/icons/mongodb';
import mysql from 'simple-icons/icons/mysql';
import redis from 'simple-icons/icons/redis';
import firebase from 'simple-icons/icons/firebase';
import gcp from 'simple-icons/icons/googlecloud';
import netlify from 'simple-icons/icons/netlify';
import aws from 'simple-icons/icons/amazonaws';
import git from 'simple-icons/icons/git';
import grafana from 'simple-icons/icons/grafana';
import docker from 'simple-icons/icons/docker';
import AboutIconsItem from './AboutIconsItem';
import { animated } from 'react-spring';

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
    const [stack, setStack] = useState([
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
    return (
        <Root style={style}>
            {stack.map(it => (
                <AboutIconsItem key={it.title} title={it.title} svg={it.svg} url={it.url}></AboutIconsItem>
            ))}
        </Root>
    );
}
