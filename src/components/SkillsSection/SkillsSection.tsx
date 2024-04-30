import React from 'react';

import { Section } from '../Section';

import classes from './style.module.scss';

const SKILLS = [
  { name: 'TYPESCRIPT', weight: 10 },
  { name: 'REACT', weight: 10 },
  { name: 'HTML', weight: 8 },
  { name: 'SASS', weight: 6 },
  { name: 'CSS', weight: 8 },
  { name: 'WEBSITES', weight: 10 },
  { name: 'JAVASCRIPT', weight: 8 },
  { name: 'AGILE', weight: 2 },
  { name: 'FIGMA', weight: 4 },
  { name: 'NODE.JS', weight: 4 },
  { name: 'CROSS-PLATFORM', weight: 2 },
  { name: 'UI/UX Design', weight: 4 },
  { name: 'UX Research', weight: 4 },
];

export function SkillsSection(): React.JSX.Element {
  return (
    <Section className={classes.root} id="skills" title="Skills">
      <ul className={classes.container}>
        {SKILLS.sort((a, b) => 0.5 - Math.random()).map(({ name, weight }) => (
          <li key={name} className={classes.skill} data-weigth={weight}>
            {name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
