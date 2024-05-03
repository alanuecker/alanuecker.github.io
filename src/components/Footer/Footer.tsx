import React from 'react';

import classNames from 'classnames';

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
            <a className={classes.link} href="mailhref:uecker.alan@gmail.com">
              <Mail />
              uecker.alan@gmail.com
            </a>
            <span className={classNames(classes.title, classes.title__follow)}>
              Follow me
            </span>
            <a
              className={classes.link}
              href="https://github.com/alanuecker"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
              GitHub
            </a>
            <a
              className={classes.link}
              href="https://linkedin.com/in/alanuecker"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
              LinkedIn
            </a>
            <a
              className={classes.link}
              href="https://twitter.com/alan_uecker"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
              Twitter
            </a>
          </div>
        </div>
        <div className={classes.sections}>
          <div className={classes.link_container}>
            <span className={classes.title}>Sections</span>
            <a className={classes.link} href="#">
              Home
            </a>
            <a className={classes.link} href="#work">
              Work and Education
            </a>
            <a className={classes.link} href="#skills">
              Skills
            </a>
            <a className={classes.link} href="#projects">
              Selected Work
            </a>
            <a className={classes.link}>Imprint</a>
          </div>

          <span className={classes.copyright}>Copyright @ Alan Uecker</span>
        </div>
      </div>
    </footer>
  );
}
