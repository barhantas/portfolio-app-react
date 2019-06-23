import React from 'react';
import styled from 'styled-components';
import { StyledLink } from './StyledComponents';

export default function ProjectItem({
  name,
  type,
  description,
  gif,
  git,
  liveDemo,
}) {
  return (
    <StyledLink href={git} target="_blank">
      {liveDemo && (
        <StyledRibbon href={liveDemo} target="_blank">
          <StyledRibbonInner>Demo</StyledRibbonInner>
        </StyledRibbon>
      )}
      <StyledProjectItem>
        <StyledImg src={gif} type={type} />
        <StyledContent>
          <span>{name}</span>
          <h6>{description}</h6>
        </StyledContent>
      </StyledProjectItem>
    </StyledLink>
  );
}

export const StyledImg = styled.img`
  height: ${({ type }) => (type === 'Web' ? 120 : 240)}px;
  width: 40%;
`;

export const StyledProjectItem = styled.div`
  display: flex;
  padding: 10px;
  &:hover {
    background-color: #d0e6f338;
    transform: scale(1.05);
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledRibbon = styled.a`
  text-decoration: none;
  background: #08ff08;
  border-radius: 50%;
  font-size: 11px;
  color: black;
  margin-left: 88%;
  &:hover {
    transform: scale(1.05);
    font-size: 16px;
  }
`;

export const StyledRibbonInner = styled.span`
  padding: 10px;
`;
