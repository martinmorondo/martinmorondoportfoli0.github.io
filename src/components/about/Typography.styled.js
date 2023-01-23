import styled from "styled-components";

export const StyledParagraph = styled.p`
  color: ${(props) => (props.dark ? "#2626237" : "#cccccc")};
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