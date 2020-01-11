import * as React from 'react';
import styled from '@emotion/styled';

import SubHeader from '../components/base/SubHeader';
import Tag from '../components/base/Tag';
import TagContainer from '../components/base/TagContainer';

const Root = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'left content right';
  font-size: 1rem;
  margin: 0 2rem;

  @media all and (max-width: 910px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'content';
  }
  @media all and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'content';
  }
`;

const Container = styled.div`
  grid-area: content;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const Bio = () => (
  <React.Fragment>
    <SubHeader>Bio</SubHeader>
    <Root id="bio">
      <Container>
        Hi. My name is Alan and i am software engineer based in Bochum, Germany.
        <br />
        <br />
        <b>TECHNICAL SKILLS</b>
        <br />
        Programming languages:
        <TagContainer>
          <Tag key="javascript">JavaScript</Tag>
        </TagContainer>
        Web development:
        <TagContainer>
          <Tag key="react">React</Tag>
          <Tag key="html">HTML</Tag>
          <Tag key="css">CSS</Tag>
          <Tag key="node">Node.js</Tag>
          <Tag key="docker">Docker</Tag>
        </TagContainer>
        Mobile Development:
        <TagContainer>
          <Tag key="cordova">Cordova</Tag>
        </TagContainer>
        Software Experience:
        <TagContainer>
          <Tag key="vscode">Visual Studio Code</Tag>
          <Tag key="unity">Unity</Tag>
          <Tag key="git">Git</Tag>
        </TagContainer>
        <br />
        <br />
        <b>PROFESSIONAL EXPERIENCE</b>
        img.ly GmbH <br />
        software engineer
        <br /> 11/2019 - now
        <br /> Building user elements for the PhotoEditorSDK and future projects
        <br />
        <br />
        rise technologies GmbH <br />
        software engineer
        <br /> 06/2017 - 08/2019
        <br /> Conception and implementation of user elements and functions for
        a SaaS communication platform
        <br />
        <br />
        <b>SCHOOL</b>
        University of Mittweida
        <br /> Graduation: 2018
        <br /> Bachelor of Science in Media Informatics and Interactive
        Entertainment
      </Container>
    </Root>
  </React.Fragment>
);

export default Bio;
