import * as React from 'react';
import styled from '@emotion/styled';

import Link from './base/Link';

const Row = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  margin: 0;
  padding: 1rem;
  background-color: #edf2ef;
`;

const Tab = styled.li`
  list-style: none;
  font-size: 1rem;
  font-weight: bold;
`;

const Header = () => (
  <header>
    <Row>
      <Tab>
        <Link to="/">Alan Uecker</Link>
      </Tab>
      <Tab>
        <Link to="/work/">Work</Link>
      </Tab>
      <Tab>
        <Link to="/projects/">Projects</Link>
      </Tab>
      <Tab>
        <Link to="/bio/">Bio</Link>
      </Tab>
    </Row>
  </header>
);

export default Header;
