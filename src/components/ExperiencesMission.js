import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../mediaqueries';

const Root = styled.div`
    display: grid;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr;
    @media ${device.tablet} {
    }
`;

const SecondRow = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr auto;
    align-content: center;
    color: ${props => props.theme.textSecondary};
    margin-top: 0.25rem;
    margin-bottom: 0.75rem;
`;

const CompanyLogo = styled.img`
    max-height: 1rem;
    margin-right: 0.5rem;
`;
const CompanyName = styled.a`
    color: ${props => props.theme.textSecondary};
    text-decoration: none;
    &:visited {
        color: ${props => props.theme.textSecondary};
        text-decoration: none;
    }
    &:hover {
        text-decoration: underline;
    }
`;

const Duration = styled.div`
    font-size: 0.8em;
`;

export default function ExperiencesMission({ title, company, yearStart, yearEnd, htmlContent }) {
    const duration = 'Some time';
    return (
        <Root>
            <h3>{title}</h3>
            <SecondRow>
                {company.logoUrl ? <CompanyLogo src={company.logoUrl}></CompanyLogo> : <div></div>}
                <CompanyName href={company.url}>{company.name}</CompanyName>
                <Duration>{duration}</Duration>
            </SecondRow>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </Root>
    );
}

ExperiencesMission.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
        logoUrl: PropTypes.string
    }),
    start: PropTypes.string.isRequired,
    end: PropTypes.string,
    htmlContent: PropTypes.string
};
