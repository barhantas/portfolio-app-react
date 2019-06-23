import React from 'react';

import {
  PageWrapper,
  PageImage,
  PageContent,
  IamWhatIamWrapper,
  ResponsiveImage,
  PageContentTitle,
} from '../components/StyledComponents';
import NavigatorButton from '../components/NavigatorButton';

import a1 from '../assets/images/1.jpg';

export default function About(props) {
  return (
    <PageWrapper>
      <PageImage>
        <ResponsiveImage src={a1} alt="logo" />
      </PageImage>
      <PageContent>
        <NavigatorButton value="/" text="< Back to home" {...props} />
        <PageContentTitle>About</PageContentTitle>
        <IamWhatIamWrapper>
          I have a great passion for learning and exploring new things. I see
          myself as an adaptive, social co-worker. Worked and working in groups.
          Creating and fixing web and mobile applications used by thousands of
          user user. I love discovering new countries and playing basketball. I
          grew up in Yalova which is the smallest city of Turkey. I graduated
          from Anadolu university as a Computer Engineer on August of 2017.
        </IamWhatIamWrapper>
      </PageContent>
    </PageWrapper>
  );
}
