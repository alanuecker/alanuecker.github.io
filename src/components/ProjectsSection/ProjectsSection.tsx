import React from 'react';

import { Section } from '../Section';
import DiamondIcon from '../../img/diamond.svg?react';

import classes from './style.module.scss';

export function ProjectsSection(): React.JSX.Element {
  return (
    <Section className={classes.root} id="projects" title="Selected Work">
      <DiamondIcon className={classes.diamond} />
      <div className={classes.item}>
        <div className={classes.item__container}>
          <span className={classes.item__title}>Project 1</span>
          <span>
            Lorem ipsum dolor sit amet consectetur. Volutpat justo ultrices
            tempor tristique ac faucibus at quis tincidunt. Justo malesuada
            euismod praesent fames erat. Scelerisque aliquet ullamcorper aliquam
            quam diam sed. Sapien commodo quam nisi habitant aenean.
          </span>
        </div>
      </div>
    </Section>
  );
}
