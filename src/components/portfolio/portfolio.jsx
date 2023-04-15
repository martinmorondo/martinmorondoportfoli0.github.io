import React, { useContext } from 'react';
import { StyledParagraph, StyledLink } from './portfolio.styles';
import {ProjectsContainer, StyledProjects } from './portfolio.styles.js';
import { SectionHeading, SectionTitle } from './portfolio.styles.js';
import { projectData } from './portfolioData.js';
import ProjectCardComponent from './projectCard.jsx';
import { LanguagesContext } from '../../context/LanguagesContext';
import { FormattedMessage } from "react-intl";

export const Portfolio = () => {

  const { changeLangToEs, changeLangToEn } = useContext(LanguagesContext);

    return (
        <StyledProjects id = "projects">
            <SectionHeading>
                <SectionTitle>
                    <FormattedMessage id="project-title" defaultMessage="Projects" />
                </SectionTitle>
            </SectionHeading>
            <StyledParagraph dark='true'
            textAlign = 'center'>
                <FormattedMessage id = "project-subtitle" defaultMessage="Recently projects"/>
                <StyledLink
                href = 'https://github.com/martinmorondo'
                target = '_blank'
                rel = 'noopener noreferrer'
                >
                    <FormattedMessage id = "project-subtitle-2" defaultMessage="See more"/>

                </StyledLink>
            </StyledParagraph>
            <ProjectsContainer>
                {projectData.map((project) => {
                return <ProjectCardComponent key={project.id} {...project} />;
            })}
            </ProjectsContainer>
        </StyledProjects>
    );
}

