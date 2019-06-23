import React, { useState } from 'react';

import {
  PageWrapper,
  PageImage,
  PageContent,
  ProjectsWrapper,
  ResponsiveImage,
  PageContentTitle,
  StyledScrollImg,
} from '../components/StyledComponents';
import NavigatorButton from '../components/NavigatorButton';
import ProjectItem from '../components/ProjectItem';

import a7 from '../assets/images/7.png';
import scroll from '../assets/scroll.png';
import projects from '../constants/projects';

export default function Projects(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <PageWrapper>
      <PageImage>
        <ResponsiveImage src={a7} alt="logo" />
      </PageImage>
      <PageContent>
        <NavigatorButton value="/" text="< Back to home" {...props} />
        <PageContentTitle>Projects</PageContentTitle>
        <ProjectsWrapper
          onScroll={(e) => setScrollPosition(e.target.scrollTop)}>
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </ProjectsWrapper>
        {!scrollPosition && <StyledScrollImg id="scrollImg" src={scroll} />}
      </PageContent>
    </PageWrapper>
  );
}
