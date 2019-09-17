import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';

const Root = styled(animated.div)`
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    align-content: start;
`;

const SecondRow = styled.div`
    color: ${props => props.theme.textSecondary};
    margin-top: 0.25rem;
    margin-bottom: 0.75rem;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 1fr;
    justify-content: space-between;
`;

export default function ExperiencesEducation({ style, title, school, year, htmlContent }) {
    return (
        <Root style={style}>
            <h3>{title}</h3>
            <SecondRow>
                <span>{school}</span>
                <span>{year}</span>
            </SecondRow>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </Root>
    );
}

ExperiencesEducation.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    htmlContent: PropTypes.string,
    school: PropTypes.string
};
