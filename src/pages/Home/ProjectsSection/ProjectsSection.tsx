import React from 'react';

import { Section } from '../../../components/Section';
import { Button } from '../../../components/Button';
import DiamondIcon from '../../../img/diamond.svg?react';
import GitHub from '../../../img/icons/github.svg?react';
import Figma from '../../../img/icons/figma.svg?react';
import nextOnStageURL from '../../../img/images/nextonstage.png';
import tastyEffectURL from '../../../img/images/tastyeffect.png';

import classes from './style.module.scss';

export function ProjectsSection(): React.JSX.Element {
  return (
    <Section className={classes.root} id="projects" title="Selected Work">
      <DiamondIcon className={classes.diamond} />
      <div className={classes.item}>
        <div className={classes.item__container}>
          <h3 className={classes.item__title}>Personal Portfolio</h3>
          <p>
            I completely overhauled my portfolio in 2024, starting with a
            comprehensive design in Figma before writing any code. The new
            version is built with the technologies I am most comfortable with,
            including React, TypeScript, SCSS, and Vite, ensuring a robust and
            efficient development process.
          </p>
          <div className={classes.button_container}>
            <Button
              to="https://github.com/alanuecker/alanuecker.github.io"
              title="GitHub"
              icon={<GitHub />}
            />
            <Button
              to="https://www.figma.com/design/4Klwu8Xrs6u3oLd9jnY23V/Portfolio?node-id=0-1&t=MctPpcHKgZF7DLjl-1"
              title="Figma"
              icon={<Figma />}
            />
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.item__container}>
          <h3 className={classes.item__title}>Next on Stage</h3>
          <p>
            For my final UX/UI bootcamp project, I tackled a problem I
            encountered after moving to a new city: discovering smaller concerts
            was overly complicated, with information scattered across Instagram
            pages, Telegram channels, and local posters.
          </p>
          <p>
            To address this, I created "Next on Stage" a website framework
            designed to empower local communities to promote their own events.
            This platform simplifies the process of finding shows by providing a
            comprehensive and up-to-date list of events. Organizers can easily
            post their events, and visitors can access essential information on
            dedicated venue and organizer pages, including location details and
            accessibility and awareness policies.
          </p>
          <img
            className={classes.item__image}
            src={nextOnStageURL}
            title="Thumbnail"
            alt="Shows screenshot from the Next on Stage website project"
          ></img>
          <p>-- Case Study comming soon. --</p>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.item__container}>
          <h3 className={classes.item__title}>Tasty Effect</h3>
          <p>
            During my UX/UI bootcamp, we were tasked with creating a platform
            that incorporates at least one aspect of accessibility. I chose to
            explore recipe websites and apps, as I was familiar with the topic
            and saw significant potential for improvement. Current recipe
            websites often bury the actual recipe beneath images and text, and
            there is no single platform offering recipes tailored to different
            skill levels or instructional formats.
          </p>
          <p>
            My solution was to create a user-friendly recipe app that makes
            ingredients and instructions easily accessible, tailors recipes to
            individual preferences, and offers multiple instructional formats.
          </p>
          <img
            className={classes.item__image}
            src={tastyEffectURL}
            title="Thumbnail"
            alt="Shows screenshot from the Tasty Effect app project"
          ></img>
          <p>-- Case Study comming soon. --</p>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.item__container}>
          <h3 className={classes.item__title}>Markdown Editor Exploration</h3>
          <p>
            This project explores "what you see is what you get" (WYSIWYG)
            editors with the objective of creating a documentation solution that
            allows developers and editors to write content using their preferred
            IDE or browser
          </p>
          <p>
            It is an evolving deep dive into various editor packages, concepts,
            transformers, and data distribution, rather than a finished product.
          </p>
          <div className={classes.button_container}>
            <Button
              to="https://github.com/alanuecker/markdown-wysiwyg-exploration"
              title="GitHub"
              icon={<GitHub />}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
