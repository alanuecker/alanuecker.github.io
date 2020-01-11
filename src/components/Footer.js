import * as React from 'react';
import styled from '@emotion/styled';
import { withRouter } from 'react-router';

import { ReactComponent as Twitter } from '../img/icons/twitter.svg';
import { ReactComponent as LinkedIn } from '../img/icons/linkedin.svg';
import { ReactComponent as Github } from '../img/icons/github.svg';
import { ReactComponent as Mail } from '../img/icons/gmail.svg';

import ExternalLink from '../components/base/ExternalLink';

const Row = styled.footer`
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 0; /* override body font size */
  margin: 0 0 1rem;
  padding-top: 1rem;
  ${(props) => !props.noBorder && 'border-top: 2px solid black;'}
  > a:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Icon = styled(ExternalLink)`
  height: ${(props) => (props.bigIcon ? '3rem' : '1.5rem')};
  width: ${(props) => (props.bigIcon ? '3rem' : '1.5rem')};
  fill: #231f20;
`;

const Footer = ({ bigIcon = false, skipLocationCheck = false, location }) => {
  if (!skipLocationCheck && location && location.pathname === '/') return null;

  return (
    <Row noBorder={skipLocationCheck}>
      <Icon to="mailto:uecker.alan@gmail.com" newTab={false} bigIcon={bigIcon}>
        <Mail />
      </Icon>
      <Icon to="https://linkedin.com/in/alanuecker" bigIcon={bigIcon}>
        <LinkedIn />
      </Icon>
      <Icon to="https://github.com/alanuecker" bigIcon={bigIcon}>
        <Github />
      </Icon>
      <Icon to="https://twitter.com/alan_uecker" bigIcon={bigIcon}>
        <Twitter />
      </Icon>
    </Row>
  );
};

export default withRouter(Footer);
