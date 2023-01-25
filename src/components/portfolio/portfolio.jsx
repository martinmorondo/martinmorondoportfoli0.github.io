import React from 'react';
import { StyledParagraph, StyledLink } from './portfolio.styles';
import {ProjectsContainer, StyledProjects } from './portfolio.styles.js';
import { SectionHeading, SectionTitle } from './portfolio.styles.js';
import { projectData } from './portfolioData.js';
import ProjectCardComponent from './projectCard.jsx';

export const Portfolio = () => {
    return (
        <StyledProjects id = "projects">
            <SectionHeading>
                <SectionTitle>
                    Projects
                </SectionTitle>
            </SectionHeading>
            <StyledParagraph dark='true'
            textAlign = 'center'>
                Selected projects I've worked on recently. {" "}
                <StyledLink
                href = 'https://github.com/martinmorondo'
                target = '_blank'
                rel = 'noopener noreferrer'
                >
                Want to see more?
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

