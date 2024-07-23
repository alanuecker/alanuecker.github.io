import React from 'react';

import classNames from 'classnames';
import { Link } from 'react-router-dom';

import DelimiterIcon from '../../img/delimiter.svg?react';
import GitHub from '../../img/icons/github.svg?react';
import Mail from '../../img/icons/gmail.svg?react';
import LinkedIn from '../../img/icons/linkedin.svg?react';
import Twitter from '../../img/icons/twitter.svg?react';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export function Footer({ className }: Props): React.JSX.Element {
  return (
    <footer className={classNames(classes.root, className)}>
      <div className={classes.banner}>
        <ul className={classes.scroll}>
          {Array.from({ length: 10 }, (_, i) => (
            <li key={`item_${i}`} className={classes.item}>
              Contact me <DelimiterIcon />
            </li>
          ))}
        </ul>
        <ul aria-hidden="true" className={classes.scroll}>
          {Array.from({ length: 10 }, (_, i) => (
            <li key={`item_${i}`} className={classes.item}>
              Contact me <DelimiterIcon />
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.container}>
        <div className={classes.contact}>
          <div className={classes.link_container}>
            <h3 className={classes.headline}>Get in touch</h3>
            <Link className={classes.link} to="mailhref:uecker.alan@gmail.com">
              <Mail />
              uecker.alan@gmail.com
            </Link>
            <span className={classNames(classes.title, classes.title__follow)}>
              Follow me
            </span>
            <Link
              className={classes.link}
              to="https://github.com/alanuecker"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
              GitHub
            </Link>
            <Link
              className={classes.link}
              to="https://linkedin.com/in/alanuecker"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
              LinkedIn
            </Link>
            <Link
              className={classes.link}
              to="https://twitter.com/alan_uecker"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
              Twitter
            </Link>
          </div>
        </div>
        <div className={classes.sections}>
          <div className={classes.link_container}>
            <Link className={classes.link} to="/#about">
              Home
            </Link>
            <Link className={classes.link} to="/#work">
              Work and Education
            </Link>
            <Link className={classes.link} to="/#skills">
              Skills
            </Link>
            <Link className={classes.link} to="/#projects">
              Selected Work
            </Link>
            <Link className={classes.link} to="/imprint">
              Imprint
            </Link>
            <Link className={classes.link} to="/privacy-policy">
              Privacy Policy
            </Link>
          </div>

          <span className={classes.copyright}>Copyright @ Alan Uecker</span>
        </div>
      </div>
    </footer>
  );
}
