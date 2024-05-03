import React from 'react';

import { Section } from '../Section';

import classes from './style.module.scss';

export function WorkSection(): React.JSX.Element {
  return (
    <Section className={classes.root} id="work" title="Work & Education">
      <div className={classes.item}>
        <div className={classes.item__date_container}>
          <span className={classes.item__date}>
            03/2024 -<br />
            07/2024
          </span>
        </div>
        <div className={classes.item__container}>
          <span className={classes.item__title}>UI/UX Bootcamp - Student</span>
          Learning the basics of UI/UX Research and Design
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.item__date_container}>
          <span className={classes.item__date}>
            11/2019 -<br />
            01/2024
          </span>
        </div>
        <div className={classes.item__container}>
          <span className={classes.item__title}>
            IMG.LY GmbH - Software Engineer
          </span>
          <span>
            I partenered with a Senior Developer to create a web-based image
            editor in React and TypeScript. This also included customer support
            and maintaining a npm library and it's integration examples.
          </span>
          <span>
            Afterwards I led the development of a documentation platform using
            React, Typescript, and Gatsby, that was specifically designed to
            meet the needs of internal developers.
          </span>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.item__date_container}>
          <span className={classes.item__date}>
            06/2017 -<br />
            08/2019
          </span>
        </div>
        <div className={classes.item__container}>
          <span className={classes.item__title}>
            rise technologies GmbH - Software Engineer
          </span>
          I worked in a team of developers to create a communication-focused
          SaaS platform in React and JavaScript. I also collaborated with a UI
          designer to create a component library.
        </div>
      </div>
    </Section>
  );
}