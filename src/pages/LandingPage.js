import * as React from 'react';
import styled from '@emotion/styled';

import Footer from '../components/Footer';

const Root = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'left content right';
  height: 100%;
  align-items: center;
  margin: 0 2rem;

  @media all and (max-width: 1280px) {
    grid-template-areas: 'content content content';
  }
`;

const Container = styled.div`
  grid-area: content;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  font-size: 4rem;
  line-height: 5rem;
  font-weight: 900;

  @media all and (max-width: 780px) {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 700;
  }
  @media all and (max-width: 320px) {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }
`;

const LandingPage = () => {
  return (
    <Root id="landingPage">
      <Container>
        <Text>Alan Uecker</Text>
        <Text>/</Text>
        <Text>Frontend Developer</Text>
        <Footer bigIcon skipLocationCheck />
      </Container>
    </Root>
  );
};

export default LandingPage;
