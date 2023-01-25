import styled, { css } from "styled-components";

export const HoverStyle = css`
    content: '';
    position: absolute;
    bottom: -0.3rem;
    right: 0;
    left: 0;
    width: 0;
    height: 0.7px;
    background: #fff;
    transition: 0.3s ease-in-out;
`;

export const Flex = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledProjects = styled.section`
  background-color: #0c0c0c;;
  color: #111;
  //background-image: url(https://pbs.twimg.com/media/C_dCWd5WsAAGYKI?format=jpg&name=4096x4096);
  //background-repeat: no-repeat;
  // background-size: cover;
`;

export const SectionHeading = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 25px;
  position: relative;
  font-size: 3rem;
  font-weight: 800;
  text-transform: capitalize;
  z-index: 1;
  color: white;
  display: inline-block;
  text-shadow: 0px 0px 8px red;

  &::after {
    position: absolute;
    content: "${(props) => props.number}";
    left: 5%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) =>
      props.dark ? "rgba(29, 28, 28, 0.2)" : "rgba(0, 0, 0, 0.06)"};
    z-index: -1;
    font-size: 8rem;
`;

export const StyledParagraph = styled.p`
  color: white;
  margin-bottom: 1rem;
  font-size: ${(props) => props.fontSize || "1.125rem"};
  letter-spacing: ${(props) => props.spacing};
  text-align: ${(props) => props.textAlign};
`;

export const StyledLink = styled.a`
  color: #4353ff;

  @media all and (max-width: 58.125rem) {
    display: block;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 3rem;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

export const ProjectTransitionImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
  position: absolute;
  transition: 0.3s ease;
`;

export const ProjectDetails = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 5rem 3rem;
  color: #fff;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(13, 14, 14, 0.97),
    rgba(0, 0, 0, 0.9)
  );
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
  transition: 0.6s ease;
  margin-top: 2rem;
  z-index: 5;
`;

export const ProjectTitle = styled.span``;

export const LinkName = styled.span``;

export const ProjectCodeLink = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 9rem;
  color: #fff;
  font-size: 14px;
  ${Flex}

  ${LinkName}::after {
    ${HoverStyle}
  }

  ${LinkName}:hover::after {
    width: 100%;
  }
`;

export const ProjectLiveLink = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  color: #fff;
  font-size: 14px;
  ${Flex}

  ${LinkName}::after {
    ${HoverStyle}
  }

  ${LinkName}:hover::after {
    width: 100%;
  }
`;

export const ProjectCard = styled.article`
  background: #fff;
  width: 325px;            // 26rem
  height: 155px;            // 20rem
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0 0 0 0;
    background: rgb(13, 14, 14, 0.1);
    z-index: 2;
  }

  &:hover {
    box-shadow: 0 2px 15px rgba(13, 14, 14) 15%;
  }

  &:hover ${ProjectDetails} {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  &:hover ${ProjectTransitionImage} {
    opacity: 1;
  }

  @media all and (max-width: 64rem) {
    width: 25rem;
  }
  @media all and (max-width: 58.125rem) {
    width: 100%;
  }
`;


