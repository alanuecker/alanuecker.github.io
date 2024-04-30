import React from 'react';

import GitHub from '../../img/icons/github.svg?react';
import Mail from '../../img/icons/gmail.svg?react';
import LinkedIn from '../../img/icons/linkedin.svg?react';
import Twitter from '../../img/icons/twitter.svg?react';
import { Section } from '../Section';

import classes from './style.module.scss';

export function ContactSection(): React.JSX.Element {
  return (
    <Section className={classes.root} id="contact" title="Contact Me">
      <div className={classes.container}>
        <a className={classes.item} href="mailhref:uecker.alan@gmail.com">
          <div>
            <Mail className={classes.item__icon} /> Mail
          </div>
          <span className={classes.item__label}>uecker.alan@gmail.com</span>
        </a>
        <a
          className={classes.item}
          href="https://linkedin.com/in/alanuecker"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <LinkedIn className={classes.item__icon} />
            LinkedIn
          </div>
          <span className={classes.item__label}>alanuecker</span>
        </a>
        <a
          className={classes.item}
          href="https://github.com/alanuecker"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <GitHub className={classes.item__icon} />
            GitHub
          </div>
          <span className={classes.item__label}>alanuecker</span>
        </a>
        <a
          className={classes.item}
          href="https://twitter.com/alan_uecker"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Twitter className={classes.item__icon} />
            Twitter
          </div>
          <span className={classes.item__label}>@alan_uecker</span>
        </a>
      </div>
    </Section>
  );
}
