import React from 'react';

import { Section } from '../Section';

import classes from './style.module.scss';

export function WorkSection(): React.JSX.Element {
  return (
    <Section className={classes.root} id="work" title="Work & Education">
      <div>
        03/2024 - 07/2024 UI/UX Bootcamp Learning the basics of UI/UX Research
        and Design
      </div>
      <div>
        IMG.LY 11/2019 - 01/2024 I develop and maintain the documentation
        experience for all SDKs. This included Markdown-based features to
        improve the writing process and the front-end build in React.Previously,
        I was heavily involved in developing and maintaining the latest version
        of PE.SDK Web and all its public repositories and examples.
      </div>
      <div>11/2019 - 01/2024 RISE Technologies Frontend Development</div>
    </Section>
  );
}
