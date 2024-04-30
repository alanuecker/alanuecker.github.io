import React from 'react';

import GitHub from '../../img/icons/github.svg?react';
import Mail from '../../img/icons/gmail.svg?react';
import LinkedIn from '../../img/icons/linkedin.svg?react';
import Twitter from '../../img/icons/twitter.svg?react';
import { Section } from '../Section';
import { ContactItem } from '../ContactItem';

import classes from './style.module.scss';

export function ContactSection(): React.JSX.Element {
  return (
    <Section className={classes.root} id="contact" title="Get in touch">
      <div className={classes.container}>
        <ContactItem
          href="https://github.com/alanuecker"
          title="GitHub"
          icon={<GitHub />}
        >
          @alanuecker
        </ContactItem>
        <ContactItem
          href="mailhref:uecker.alan@gmail.com"
          title="Mail"
          external={false}
          icon={<Mail />}
        >
          uecker.alan@gmail.com
        </ContactItem>
        <ContactItem
          href="https://linkedin.com/in/alanuecker"
          title="LinkedIn"
          icon={<LinkedIn />}
        >
          @alanuecker
        </ContactItem>
        <ContactItem
          href="https://twitter.com/alan_uecker"
          title="Twitter"
          icon={<Twitter />}
        >
          @alan_uecker
        </ContactItem>
      </div>
    </Section>
  );
}
