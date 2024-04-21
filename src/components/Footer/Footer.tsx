import React from 'react';

import classNames from 'classnames';

import GitHub from '../../img/icons/github.svg?react';
import Mail from '../../img/icons/gmail.svg?react';
import LinkedIn from '../../img/icons/linkedin.svg?react';
import Twitter from '../../img/icons/twitter.svg?react';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={classNames(classes.root, className)}>
      <a className={classes.item} href="mailhref:uecker.alan@gmail.com">
        <Mail className={classes.item__icon} />
        <span className={classes.item__label}>uecker.alan@gmail.com</span>
      </a>
      <a
        className={classes.item}
        href="https://linkedin.com/in/alanuecker"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn className={classes.item__icon} />
        <span className={classes.item__label}>alanuecker</span>
      </a>
      <a
        className={classes.item}
        href="https://github.com/alanuecker"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub className={classes.item__icon} />
        <span className={classes.item__label}>alanuecker</span>
      </a>
      <a
        className={classes.item}
        href="https://twitter.com/alan_uecker"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter className={classes.item__icon} />
        <span className={classes.item__label}>@alan_uecker</span>
      </a>
    </footer>
  );
};
