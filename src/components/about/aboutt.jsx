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
import downloadIcon from "./donwload-icon.svg";
import resume from "../../assets/img/CV..pdf";

export const About = () => {
  return (
    <>
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="profile">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src='https://avatars.mds.yandex.net/i?id=d61f21f09e59ff1a42ec95ae7141a6bc6f8afeba-8209451-images-thumbs&n=13&exp=1' />
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
    </>
  );
};

export default About;