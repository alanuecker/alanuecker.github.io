import React from 'react';

import { Section } from '../Section';

import codingImageUrl from '../../img/coding.png';
import responsiveImageUrl from '../../img/responsive-design.png';
import digitalImageUrl from '../../img/digital.png';
import controlPanelImageUrl from '../../img/control-panel.png';

import classes from './style.module.scss';

export function SkillsSection(): React.JSX.Element {
  return (
    <Section
      className={classes.root}
      id="skills"
      title="Skills"
      showBorder={false}
    >
      <div className={classes.container}>
        <div className={classes.item}>
          <img
            src={codingImageUrl}
            alt="Depiction of a web development view"
            className={classes.item__image}
          ></img>
          <span className={classes.item__title}>Web Development</span>
          <span className={classes.item__body}>
            I'm an expert in HTML5, CSS3, JavaScript (ES6+), TypeScript, React,
            and Node.js
          </span>
        </div>
        <div className={classes.item}>
          <img
            src={responsiveImageUrl}
            alt="Depiction of a design displayed on web and mobile devices"
            className={classes.item__image}
          ></img>
          <span className={classes.item__title}>Responsive Design</span>
          <span className={classes.item__body}>
            Creating visually appealing and functional websites across devices
          </span>
        </div>
        <div className={classes.item}>
          <img
            src={controlPanelImageUrl}
            alt="Depiction of a digital control panel"
            className={classes.item__image}
          ></img>
          <span className={classes.item__title}>Tools</span>
          <span className={classes.item__body}>
            I use tools like Git, GitHub Actions, Jest, Playwright, ESLint,
            Prettier, and Vite daily
          </span>
        </div>
        <div className={classes.item}>
          <img
            src={digitalImageUrl}
            alt="Depiction of digital design process"
            className={classes.item__image}
          ></img>
          <span className={classes.item__title}>UI/UX Design</span>
          <span className={classes.item__body}>
            Research, wireframing, prototyping, user flow analysis
          </span>
        </div>
      </div>
    </Section>
  );
}
