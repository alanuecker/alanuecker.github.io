import React from 'react';

import GitHub from '../../../img/icons/github.svg?react';
import Mail from '../../../img/icons/gmail.svg?react';
import LinkedIn from '../../../img/icons/linkedin.svg?react';
import Twitter from '../../../img/icons/twitter.svg?react';
import { ContactItem } from '../../../components/ContactItem';

import classes from './style.module.scss';

export function AboutSection(): React.JSX.Element {
  return (
    <section className={classes.root} id="about" title="About">
      <div className={classes.container}>
        <h1 className={classes.display}>
          Hi, I‘m Alan a Software Engineer based in Leipzig, Germany.
        </h1>
        <span className={classes.body}>
          My experience in developing websites and an education in UI/UX design
          make me the perfect fit for any cross-functional team.
        </span>
      </div>
      <div className={classes.contacts}>
        <ContactItem
          to="https://github.com/alanuecker"
          title="GitHub"
          icon={<GitHub />}
        />
        <ContactItem
          to="mailto:uecker.alan@gmail.com"
          title="Mail"
          external={false}
          icon={<Mail />}
        />
        <ContactItem
          to="https://linkedin.com/in/alanuecker"
          title="LinkedIn"
          icon={<LinkedIn />}
        />
        <ContactItem
          to="https://twitter.com/alan_uecker"
          title="Twitter"
          icon={<Twitter />}
        />
      </div>
    </section>
  );
}
