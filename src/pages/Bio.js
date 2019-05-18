import * as React from 'react';
import styled from '@emotion/styled';

import SubHeader from '../components/base/SubHeader';

const Root = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'left content right';
  font-size: 1rem;
  margin: 0 2rem;
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
        Hi. My name is Alan and i am Software Engineer based in Cologne, Germany.
        <br />
        <br />I mostly focus on the frontend part of an application and really like the
        possibilities that javascript offers to modern web development.
        <br /> Especially the short and fast way from idea to finished implementation make a lot of
        fun.
      </Container>
    </Root>
  </React.Fragment>
);

export default Bio;
