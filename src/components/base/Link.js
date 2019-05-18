import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Root = styled(NavLink)`
  color: #231f20;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 0.25rem;
  :hover {
    text-decoration: line-through;
  }
`;

const Link = ({ to, className, children }) => {
  return (
    <Root to={to} activeStyle={{ textDecoration: 'line-through' }} className={className} exact>
      {children}
    </Root>
  );
};

export default Link;
