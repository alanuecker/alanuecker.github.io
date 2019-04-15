import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Bio from '../pages/Bio';
import Work from '../pages/Work';
import Projects from '../pages/Projects';
import LandingPage from '../pages/LandingPage';

import Header from './Header';
import Footer from './Footer';

const Root = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  overflow-y: auto;
  padding: 4rem 0 0;
`;

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Root>
        <Header />
        <Content>
          <Route path="/" exact component={LandingPage} />
          <Route path="/work/" exact component={Work} />
          <Route path="/projects/" exact component={Projects} />
          <Route path="/bio/" exact component={Bio} />
        </Content>
        <Footer />
      </Root>
    </BrowserRouter>
  );
};

export default App;
