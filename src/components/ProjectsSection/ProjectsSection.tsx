import React from 'react';

import { Section } from '../Section';

import classes from './style.module.scss';

interface Props {}

export function ProjectsSection({}: Props): React.JSX.Element {
  return (
    <Section
      className={classes.root}
      id="projects"
      title="Selected Work"
    ></Section>
  );
}
