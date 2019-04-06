import React from 'react';
import styled from '@emotion/styled';

const Root = styled.a`
  color: #231f20;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 0.25rem;
  :hover {
    text-decoration: line-through;
  }
`;

const ExternalLink = ({ to, newTab = true, className, children }) => {
  return (
    <Root className={className} href={to} target={newTab ? "_blank" : ""}>
      {children}
    </Root>
  );
};

export default ExternalLink;
