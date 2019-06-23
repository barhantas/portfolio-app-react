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

import a6 from '../assets/images/6.jpg';

export default function Contact(props) {
  return (
    <PageWrapper>
      <PageImage>
        <ResponsiveImage src={a6} alt="logo" />
      </PageImage>
      <PageContent>
        <NavigatorButton value="/" text="< Back to home" {...props} />
        <PageContentTitle>Contact</PageContentTitle>
        <IamWhatIamWrapper>
         barhantas@gmail.com
        </IamWhatIamWrapper>
      </PageContent>
    </PageWrapper>
  );
}
