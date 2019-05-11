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
`;

export const PageContent = styled.div`
  flex: 1;
  margin: auto;
  background: #ffffff;
  text-align: center;
`;

export const PageContentTitle = styled.h3`
  font-family: fantasy;
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
