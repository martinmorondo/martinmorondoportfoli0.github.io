import React, { useContext } from "react";
import {BiLinkExternal } from 'react-icons/bi';
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";
import { LanguagesContext } from '../../context/LanguagesContext';
import { FormattedMessage } from "react-intl";
import {
    LinkName,
    ProjectCard,
    ProjectCodeLink,
    ProjectDetails,
    ProjectImage,
    ProjectLiveLink,
    ProjectTitle,
    ProjectTransitionImage,
  } from './portfolio.styles';


  const ProjectCardComponent = ({
    image,
    transitionImage,
    title,
    codeLink,
    liveLink,
  }) => 
  {

  const { changeLangToEs, changeLangToEn } = useContext(LanguagesContext);

    return (
        <>
            <IconContext.Provider value={{ size: "1rem" }}>
            <ProjectCard>
          <ProjectImage src={image} alt={title} />
          <ProjectTransitionImage src={transitionImage} alt={title} />
          <ProjectDetails>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectCodeLink
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMarkGithub />
              <LinkName>
                <FormattedMessage id="project-code" defaultMessage="Github" />               
              </LinkName>
            </ProjectCodeLink>
            <ProjectLiveLink
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal />
              <LinkName>
                <FormattedMessage id="project-site" defaultMessage="Sitio" />                             
              </LinkName>
            </ProjectLiveLink>
          </ProjectDetails>
        </ProjectCard>
            </IconContext.Provider>
        </>
    );
  };

  export default ProjectCardComponent;