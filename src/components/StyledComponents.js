import styled from 'styled-components';

export const AppWrapper = styled.div`
  background: #f9f9f9;
  display: flex;
  justify-content: center;
`;

export const PageWrapper = styled.div`
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  margin: 0 80px;
`;

export const PageImage = styled.div`
  margin: auto;
  background: transparent;
  flex: 1;
  transform: translateX(-20%);
  animation: slide-in 1s forwards;
  @keyframes slide-in {
    100% {
      transform: translateX(0%);
    }
  }
`;

export const PageContent = styled.div`
  flex: 1;
  margin: auto;
  background: #ffffff;
  text-align: center;
  transform: translateX(20%);
  animation: slide-in 1s forwards;
  @keyframes slide-in {
    100% {
      transform: translateX(0%);
    }
  }
`;

export const PageContentTitle = styled.h3`
  font-family: fantasy;
  text-transform: capitalize;
`;

export const IamWhatIamWrapper = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-family: monospace;
`;

export const VerticalButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 66px 0;
`;

export const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  min-width: ${(props) => props.minWidth || 400}px;,
`;

export const SocialMediaButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ProjectsWrapper = styled.div`
  font-size: 18px;
  font-family: monospace;
  height: 85vh;
  overflow: scroll;
`;

export const StyledScrollImg = styled.img`
  margin-top: -66px;
  opacity: 0.8;
  animation-name: pulse;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  @keyframes pulse {
    from {
      transform: scale(1);
    }
    50% {
      transform: scale(0.85);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const HoverIcon = styled.i`
  &:hover {
    transform: scale(1.2);
  }
`;

export const CompanyName = styled.h3`
  border-top: 1px solid lightgrey;
  display:inline-flex;

`;

export const WorkDate = styled.div`
font-size:12px;
padding-left:10px;
`;

export const JobTitle = styled.h5`
  margin: 0;
`;
export const Department = styled.h6`
  margin: 0;
`;
export const Responsibilities = styled.h6`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Responsibility = styled.div``;

export const Projects = styled.h6`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Project = styled.div``;

export const CompanyLogo = styled.img`
  height: 40px;
  width: 40px;
`;
