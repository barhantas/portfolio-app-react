import React, { useState } from 'react';

import {
  PageWrapper,
  PageImage,
  PageContent,
  IamWhatIamWrapper,
  ResponsiveImage,
  PageContentTitle,
  CompanyName,
  JobTitle,
  Department,
  Responsibilities,
  Responsibility,
  Projects,
  Project,
  WorkDate,
  CompanyLogo,
  ProjectsWrapper,
  StyledScrollImg,
} from '../components/StyledComponents';
import NavigatorButton from '../components/NavigatorButton';

import a3 from '../assets/images/3.jpg';
import scroll from '../assets/scroll.png';

export default function Work(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <PageWrapper>
      <PageImage>
        <ResponsiveImage src={a3} alt="logo" />
      </PageImage>
      <PageContent>
        <NavigatorButton value="/" text="< Back to home" {...props} />
        <PageContentTitle>Work</PageContentTitle>
        <IamWhatIamWrapper>
          <ProjectsWrapper
            onScroll={(e) => setScrollPosition(e.target.scrollTop)}>
            <CompanyName>
              iyzico<WorkDate>Apr 2019 - present</WorkDate>
              <CompanyLogo src="https://media.licdn.com/dms/image/C560BAQFv5PW53AftMQ/company-logo_400_400/0?e=1569456000&v=beta&t=353BELNkeePOMmcC9BMJWVkFnyOu-vpLn-KcLY5OCQ4" />
            </CompanyName>
            <JobTitle>Software Engineer</JobTitle>
            <Department>Merchant Services Department</Department>
            <h5>Responsibilities</h5>
            <Responsibilities>
              <Responsibility>
                • Application UI development with ReactJS, Redux, Saga, Webpack,
                GraphQL
              </Responsibility>
              <Responsibility>
                • Mobile App development with React Native
              </Responsibility>
            </Responsibilities>
            <h5>Projects</h5>
            <Projects>
              <Project>
                • Single Page merchant panel for iyzico merchants.
              </Project>
              <Project>• Mobile Application for iyzico merchants.</Project>
              <Project>
                • Checkout form entegration and development for merchants.
              </Project>
              <Project>• Subscription Module for recurring payments.</Project>
            </Projects>
            <CompanyName>
              Huawei Technologies<WorkDate>Apr 2018 - Apr 2019</WorkDate>
              <CompanyLogo src="https://media.licdn.com/dms/image/C510BAQHDjJMzWUhMfg/company-logo_400_400/0?e=1569456000&v=beta&t=8h3FVR39lbfaM1GSEXkISx8DCfFB7bCqFtKEkAT6sJs" />
            </CompanyName>
            <JobTitle>General Software Assistant Engineer</JobTitle>
            <Department>Integration Solution Development Department</Department>
            <h5>Responsibilities</h5>
            <Responsibilities>
              <Responsibility>
                • Restful web service development with Python, Django Framework
              </Responsibility>
              <Responsibility>
                • Application UI development with ReactJS, Redux, Saga, Webpack
              </Responsibility>
            </Responsibilities>
            <h5>Projects</h5>
            <Projects>
              <Project>
                • TAT is basically test automation tool for totally covering
                enterprise test automation processes.TAT project has Python
                Django Framework, Celery, Redis, Socket and PostgreSql stacks on
                backend. For UI development we have used ReactJS and some common
                javascript libraries.
              </Project>
              <Project>
                • IOC is intelligent operation center project for smart
                campuses,cities. We use restful microservices developed with
                Java Spring Boot and these services can communicate with each
                other by using Kafka message broker.And also OAuth2, Redis
                ...etc. stacks are in backend.For UI development we have used
                ReactJS, Redux, Saga, Webpack ... etc.
              </Project>
            </Projects>
            <CompanyName>
              Vodafone & Dilişim <WorkDate>Nov 2017 - Mar 2018</WorkDate>
              <CompanyLogo src="https://media.licdn.com/dms/image/C4D0BAQG4YAeUoNmg4w/company-logo_400_400/0?e=1569456000&v=beta&t=XXUxI9--EBxEk58F_z809GhmDmgH4Zq6lFq78QMsJKU" />
              <CompanyLogo src="https://media.licdn.com/dms/image/C560BAQHlbsSEvUZg7g/company-logo_400_400/0?e=1569456000&v=beta&t=9OhLrePo_jIHwRiaueaCmqb6mt4pfMgCzR8S7HD3UUk" />
            </CompanyName>
            <JobTitle>Software Engineer & Evam Consultant</JobTitle>
            <h5>Responsibilities</h5>
            <Responsibilities>
              <Responsibility>• Complex Event Processing</Responsibility>
              <Responsibility>• Tableau BI & Analytics</Responsibility>
            </Responsibilities>
            <h5>Projects</h5>
            <Projects>
              <Project>
                • Evam complex event processing for vodafone company.Listening
                and parsing oracle golden gate logs and create a business login
                in state machine(EVAM)
              </Project>
              <Project>
                • Big data dashboards for vodafone company with Tableau tool.
              </Project>
            </Projects>
            <CompanyName>
              E-Net Technology <WorkDate>Aug 2017 - Oct 2017</WorkDate>
              <CompanyLogo src="https://media.licdn.com/dms/image/C560BAQHfwkTsTjMdpg/company-logo_400_400/0?e=1569456000&v=beta&t=XRsYWajbhPl1BRd5lgAsFhclm5aCVlKvCbnUi1zatR0" />
            </CompanyName>
            <JobTitle>Software Developer</JobTitle>
            <h5>Responsibilities</h5>
            <Responsibilities>
              <Responsibility>
                • Web development with Python,Django & ReactJS
              </Responsibility>
            </Responsibilities>
            <h5>Projects</h5>
            <Projects>
              <Project>
                • Huge pazar project for tourism endustries.Businesses can sell
                and buy every kind of ticket, tour or even hotel room.
              </Project>
            </Projects>
            <CompanyName>
              Groupe Renault <WorkDate>Jul 2017/1 month</WorkDate>
              <CompanyLogo src="https://media.licdn.com/dms/image/C4E0BAQHRTJ8jq3d_kQ/company-logo_400_400/0?e=1569456000&v=beta&t=Yrify6E60oLPXcwNpUkXwUlGjRxGZeDak5WZWpyN2sE" />
            </CompanyName>
            <JobTitle>Intern</JobTitle>
            <CompanyName>
              Türkiye İş Bankası <WorkDate>Jul 2015/2 month</WorkDate>
              <CompanyLogo src="https://media.licdn.com/dms/image/C4D0BAQFbFm-jU--hkQ/company-logo_400_400/0?e=1569456000&v=beta&t=sXjpzNtGEj6ZpV94DaML94kKpnCJKxCfKYLb35EOLg0" />
            </CompanyName>
            <JobTitle>Intern</JobTitle>
          </ProjectsWrapper>
        </IamWhatIamWrapper>
        {!scrollPosition && <StyledScrollImg id="scrollImg" src={scroll} />}
      </PageContent>
    </PageWrapper>
  );
}
