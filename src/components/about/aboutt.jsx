import React from "react";
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
// import myImage from "../../assets/img/profile.png";
import downloadIcon from "./svg/donwload-icon.svg";
import resume from "../../assets/img/CV..pdf";

import {
    TechnologiesHeader,
    TechnologiesIcons,
    TechnologyIcon,
} from '../technologies/Technologies.styled';
import { iconsData } from '../technologies/icons';

export const About = () => {

  const technologiesHeader = {
    color: '#fff',
    marginTop: '1.5rem',
    padding: '1rem'
  }

  const technologiesIcons = {
    padding: '1.4rem',
    margin: '0'
  }

  return (
    <>
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true">                {/* number="profile" */}
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src='https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/278569259_10228001137441671_739846762833112914_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zjAB4uvb1EcAX8F_nrr&_nc_ht=scontent.faep9-2.fna&oh=00_AfAhVKIF6MrMlzQNFDyPwUY1eToOui_b0hr9LgGWUQuB4A&oe=63D6EFA5' />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Martín Morondo and I am currently studying Systems Engineering at UNICEN. I am a passionate Front-end Developer based in Argentina.
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create responsive websites or web apps from scratch. The technologies, tools and languages I am using to build my projects are HTML, CSS, Javascript, jQuery, React JS, Bootstrap, Git, GitHub and VS Code.
          </StyledParagraph>
          <StyledParagraph>
            I have eagerness to learn something new every day and I love to
            share my knowledge to my fellow students and developers. And I am
            looking forward to talk with you!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-martin-morondo"
            >
              Download Resume
            </ResumeLink>
          </Resume>

        </AboutDetailsContainer>       
      </AboutContent>

      <TechnologiesHeader style={technologiesHeader}>Technologies I am familiar with</TechnologiesHeader>

            <TechnologiesIcons style={technologiesIcons}>
            {iconsData.map((iconData) => {
            return (
                <TechnologyIcon
                key={iconData.id}
                src={iconData.icon}
                alt={iconData.name}
                title={iconData.name}
                {...iconData}
                />
            );
        })}
      </TechnologiesIcons>
    </>
  );
};

export default About;
