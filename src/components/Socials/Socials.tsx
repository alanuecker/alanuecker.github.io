import React from 'react';

import { ReactComponent as GitHub } from '../../img/icons/github.svg';
import { ReactComponent as Mail } from '../../img/icons/gmail.svg';
import { ReactComponent as LinkedIn } from '../../img/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../../img/icons/twitter.svg';
import { Heading } from '../Heading';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export const Socials: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Heading>Socials</Heading>
      <a className={classes.icon} href="mailhref:uecker.alan@gmail.com">
        <Mail />
        Mail
      </a>
      <a
        className={classes.icon}
        href="https://linkedin.com/in/alanuecker"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn />
        LinkedIn
      </a>
      <a
        className={classes.icon}
        href="https://github.com/alanuecker"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub />
        GitHub
      </a>
      <a
        className={classes.icon}
        href="https://twitter.com/alan_uecker"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter />
        Twitter
      </a>
    </div>
  );
};
