import * as React from 'react';
import styled from '@emotion/styled';

import Link from './base/Link';

const Row = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'logo work projects bio';
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.87);

  @media all and (max-width: 780px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    grid-template-areas: 'logo logo logo' 'work projects bio';
  }
`;

const Tab = styled.li`
  list-style: none;
  font-size: 1rem;
  grid-area: ${props => props.area};
  > a {
    font-weight: 700;
  }
`;

const Header = () => (
  <header>
    <Row>
      <Tab area="logo">
        <Link to="/">Alan Uecker</Link>
      </Tab>
      <Tab area="work">
        <Link to="/work/">Work</Link>
      </Tab>
      <Tab area="projects">
        <Link to="/projects/">Projects</Link>
      </Tab>
      <Tab area="bio">
        <Link to="/bio/">Bio</Link>
      </Tab>
    </Row>
  </header>
);

export default Header;
