import React from 'react';
import styled from 'styled-components';
import * as feather from 'feather-icons';
import PropTypes from 'prop-types';
import theme from '../theme';

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
            <div
                style={{ color: theme.primary }}
                dangerouslySetInnerHTML={{ __html: feather.icons[icon].toSvg() }}
            ></div>
            <StyledA href={href}>{text}</StyledA>
        </Root>
    );
}

HomeInfoContact.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};
