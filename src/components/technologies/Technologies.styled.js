import styled from "styled-components";

export const TechnologiesHeader = styled.h2`
  text-align: center;
  font-weight: 700;
`;

export const TechnologiesIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const TechnologyIcon = styled.img`
  height: 32px;
  transition: .3s;

  &:hover {
    transform: scale(1.2);
  }

  @media all and (max-width: 768px) {
    height: 24px;
  }
`;
