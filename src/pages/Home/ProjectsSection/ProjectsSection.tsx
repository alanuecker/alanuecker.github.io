import React from 'react';

import { Section } from '../../../components/Section';
import { Button } from '../../../components/Button';
import DiamondIcon from '../../../img/diamond.svg?react';
import GitHub from '../../../img/icons/github.svg?react';

import classes from './style.module.scss';

export function ProjectsSection(): React.JSX.Element {
  return (
    <Section className={classes.root} id="projects" title="Selected Work">
      <DiamondIcon className={classes.diamond} />
      <div className={classes.item}>
        <div className={classes.item__container}>
          <span className={classes.item__title}>WORK IN PROGRESS</span>
          <span>COMMING SOON</span>
          <div className={classes.button_container}>
            <Button to="/projects/tasty-effect" title="Link" />{' '}
            <Button
              to="https://github.com/alanuecker"
              title="GitHub"
              icon={<GitHub />}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
