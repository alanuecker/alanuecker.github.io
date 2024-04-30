import React from 'react';

import { Section } from '../Section';

import classes from './style.module.scss';

export function AboutSection(): React.JSX.Element {
  return (
    <Section
      className={classes.root}
      id="about"
      title="About"
      showTitle={false}
    >
      <div className={classes.container}>
        <h1 className={classes.display}>
          Hi, I‘m Alan a Software Engineer based in Leipzig, Germany.
        </h1>
        <span className={classes.body}>
          My experience in developing websites and an education in UI/UX design
          make me the perfect fit for any cross-functional team.
        </span>
      </div>
    </Section>
  );
}
