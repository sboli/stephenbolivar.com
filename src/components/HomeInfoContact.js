import React from 'react';
import styled from 'styled-components';
import * as feather from 'feather-icons';

const Root = styled.div`
    display: flex;
    align-items: center;
`;

const StyledA = styled.a`
    display: block;
    margin-left: 10px;
    color: inherit;
    text-decoration: none;
    &:visited {
        color: inherit;
        text-decoration: none;
    }
`;

export default function HomeInfoContact({ icon, text, href }) {
    return (
        <Root>
            <div dangerouslySetInnerHTML={{ __html: feather.icons[icon].toSvg() }}></div>
            <StyledA href={href}>{text}</StyledA>
        </Root>
    );
}
