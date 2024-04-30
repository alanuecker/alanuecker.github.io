import React from 'react';

import { Section } from '../Section';

import classes from './style.module.scss';

const SKILLS = [
  'TYPESCRIPT',
  'HTML',
  'SASS',
  'REACT',
  'CSS',
  'WEBSITES',
  'JAVASCRIPT',
  'AGILE',
  'FIGMA',
  'NODE.JS',
  'CROSS-PLATFORM',
  'UI/UX Design',
  'UX Research',
];

export function SkillsSection(): React.JSX.Element {
  return (
    <Section className={classes.root} id="skills" title="Skills">
      <div className={classes.container}>
        {SKILLS.map(skill => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </Section>
  );
}
