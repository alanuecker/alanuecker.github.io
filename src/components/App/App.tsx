import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { AboutSection } from '../AboutSection';
import { SkillsSection } from '../SkillsSection';
import { WorkSection } from '../WorkSection';
import { ProjectsSection } from '../ProjectsSection';

import classes from './style.module.scss';

export function App(): React.JSX.Element {
  return (
    <div>
      <Header />
      <main className={classes.content}>
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
