import React from 'react';

import { Section } from '../Section';
import { SoftwareItems } from '../SoftwareItems';
import DiamondIcon from '../../img/diamond.svg?react';

import classes from './style.module.scss';

export function WorkSection(): React.JSX.Element {
  return (
    <Section className={classes.root} id="work" title="Work & Education">
      <DiamondIcon className={classes.diamond} />
      <div className={classes.item}>
        <div className={classes.item__date_container}>
          <span className={classes.item__date}>
            03/2024 -<br />
            07/2024
          </span>
        </div>
        <div className={classes.item__container}>
          <span className={classes.item__title}>
            UX/UI Product Design Bootcamp - WBS Coding School
          </span>
          <span>
            Learning the basics of UX Research and UI Design in a project based
            and team oriented environment.
          </span>
          <SoftwareItems
            items={[
              'UX Principles',
              'UX Research',
              'UI Design',
              'Design Thinking',
              'Figma',
            ]}
          />
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
            Software Engineer - IMG.LY GmbH
          </span>
          <span>
            I started out at IMG.LY by partnering with a Senior Developer to
            create a web-based image editor using React and TypeScript. This
            role also involved providing customer support for developers and
            maintaining a npm library and it's integration examples.
          </span>
          <span>
            Afterward, I led the development of a documentation platform
            utilizing React, Typescript, and Gatsby, that was specifically
            designed to meet the needs of internal developers.
          </span>
          <SoftwareItems
            items={[
              'TypeScript',
              'React',
              'SASS',
              'Storybook',
              'Gatsby',
              'Markdown',
              'MDX',
              'Vite',
              'ESLint',
              'Jest',
              'Playwright',
              'CI/CD',
              'npm',
            ]}
          />
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
            Software Engineer - rise technologies GmbH
          </span>
          <span>
            I worked in a team of 4 developers to create a communication-focused
            SaaS platform in React and JavaScript. I also collaborated with a UI
            designer to create a component library.
          </span>
          <SoftwareItems
            items={['JavaScript', 'React', 'Cordova', 'MongoDB']}
          />
        </div>
      </div>
    </Section>
  );
}
