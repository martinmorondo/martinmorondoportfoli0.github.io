import React, { useContext } from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
} from "./About.styled";
import { SectionHeading, SectionTitle } from "./SectionHeading";
import { StyledParagraph } from "./Typography.styled";
import downloadIcon from "./svg/donwload-icon.svg";
import resume from "../../assets/img/CV_MartinMorondo.pdf";
import { LanguagesContext } from '../../context/LanguagesContext';
import { FormattedMessage } from "react-intl";

import {
    TechnologiesHeader,
    TechnologiesIcons,
    TechnologyIcon,
} from '../technologies/Technologies.styled';
import { iconsData } from '../technologies/icons';

export const About = () => {

  const { changeLangToEs, changeLangToEn } = useContext(LanguagesContext);

  const technologiesHeader = {
    color: '#fff',
    marginTop: '1.5rem',
    padding: '1rem'
  }

  const technologiesIcons = {
    padding: '1.4rem',
    margin: '0'
  }

  const iconsText = {
    fontSize: '14px',
    color: '#fff',
    marginTop: '2px',
    fontStyle: 'italic',
  };
  
  return (
    <>
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true">
          <FormattedMessage id="about-title" defaultMessage="About Me" />
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src='https://github.com/martinmorondo/react-portfolio/blob/main/src/assets/img/profilee.jpg?raw=true' />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            <FormattedMessage id="about-first-paragraph" defaultMessage="About Me" />
          </StyledParagraph>
          <StyledParagraph>
            <FormattedMessage id="about-second-paragraph" defaultMessage="About Me" />
          </StyledParagraph>
          <StyledParagraph>
            <FormattedMessage id="about-third-paragraph" defaultMessage="About Me" />
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-martin-morondo"
            >
              <FormattedMessage id="btn_download-cv" defaultMessage="Download CV" />
            </ResumeLink>
          </Resume>

        </AboutDetailsContainer>       
      </AboutContent>

      <TechnologiesHeader style={technologiesHeader}>
        <FormattedMessage id="techonologies" defaultMessage="Technologies" />
      </TechnologiesHeader>

      <TechnologiesIcons style={technologiesIcons} className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
  {iconsData.map((iconData) => {
    return (
      <div key={iconData.id}>
        <TechnologyIcon
          src={iconData.icon}
          alt={iconData.name}
          title={iconData.name}
          {...iconData}
        />
       <p style = {iconsText}>{iconData.name}</p>
      </div>
    );
  })}
</TechnologiesIcons>

    </>
  );
};

export default About;
