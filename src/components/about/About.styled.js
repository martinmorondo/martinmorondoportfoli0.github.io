import styled from "styled-components";

export const AboutContent = styled.div`
  display: flex;
  gap: 5%;
  margin-top: 6.5rem;
  font-family: monospace;
  font-weight: 700;   
`;

export const AboutImageContainer = styled.div`
  position: relative;
  width: 45%;
  height: 25rem;
  z-index: 3;

  &::after {
    content: "";
    position: absolute;
    top: -1rem;
    left: -1rem;
    background: #F5FFFA;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    z-index: -2;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 0 0;
    background: rgb(13, 14, 14, 0.199);
    z-index: 2;

    @media all and (max-width: 64rem) {
      width: 100%;
      height: 20rem;
      margin-bottom: 1.75rem;
  
      &::after {
        content: "";
        top: -0.5rem;
        left: -0.5rem;
      }
    }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 99%;
  object-fit: cover;
  position: relative;
  border-radius: 30px;
`;

export const AboutDetailsContainer = styled.div`
  position: relative;
  width: 45%;

  @media all and (max-width: 64rem) {
    width: 100%;
  }
`;

export const Resume = styled.div`
  display: inline-block;
  margin-top: 3rem;
  position: relative;
  transition: 0.3s ease;

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -0.5rem;
    height: 1px;
    border-radius: 5px;
    width: 100%;
    transition: transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media all and (max-width: 64rem) {
    margin-top: 1rem;
  }
`;

export const ResumeLink = styled.a`
  color: #fff;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;

  &::before {
    content: ${(props) => `url(${props.icon})`};
    position: absolute;
    right: -2rem;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transform: translateX(-20px);
    transform: translateX(-20px);
    transition: all 0.3s;
  }

  &:hover::before {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  @media all and (max-width: 64rem) {
    font-size: 1rem;
`;

