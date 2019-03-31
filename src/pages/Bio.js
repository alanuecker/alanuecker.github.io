import * as React from 'react';
import styled from '@emotion/styled';

import H1 from '../components/base/H1';
import Body from '../components/base/Body';
import Link from '../components/base/Link';

const Root = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'left content right';
  font-size: 1rem;
  padding: 2rem 1rem 0;
  background-color: #d6ced5;
`;

const Container = styled.div`
  grid-area: content;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const BodyLink = styled(Link)`
  font-size: 0.875rem;
`;

const Bio = () => {
  return (
    <Root id="bio">
      <Container>
        <H1>Bio</H1>
        <Body>Lives and works in Cologne, Germany.</Body>
        <H1>Links</H1>
        <p>
          <BodyLink to="mailto:uecker.alan@gmail.com">uecker.alan@gmail.com</BodyLink>
          <br />
          <br />
          <BodyLink to="https://github.com/alanuecker">github</BodyLink>
          <br />
          <br />
          <BodyLink to="https://twitter.com/_AlanUecker">twitter</BodyLink>
          <br />
          <br />
          <BodyLink to="linkedin.com/in/alan-uecker">linkedin</BodyLink>
        </p>
      </Container>
    </Root>
  );
};

export default Bio;
