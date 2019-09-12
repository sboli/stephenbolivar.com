import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../mediaqueries';
import theme from '../theme';
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

const Root = styled.div`
    grid-column: 1/3;
    grid-row: 3/4;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    padding-top: 40px;
    align-content: center;
    @media ${device.tablet} {
        padding-top: 70px;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: 1fr 1fr;
    }
`;

const Icon = styled.div`
    width: 100%;
    height: auto;
    fill: ${theme.textPrimary};
`;

const Row1 = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
`;

export default function AboutIcons() {
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
        <Root>
            {stack.map(it => (
                <a>
                    <Icon key={it} dangerouslySetInnerHTML={{ __html: it.svg }}></Icon>
                </a>
            ))}
        </Root>
    );
}
