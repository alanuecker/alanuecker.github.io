import React from 'react';

import { AboutSection } from './AboutSection';
import { SkillsSection } from './SkillsSection';
import { WorkSection } from './WorkSection';
import { ProjectsSection } from './ProjectsSection';

export function Home(): React.JSX.Element {
  return (
    <>
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
