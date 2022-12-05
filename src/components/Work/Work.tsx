import React from 'react';

import { Heading } from '../Heading';

import * as classes from './style.module.scss';

interface Props {
  className?: string;
}

export const Work: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Heading>Work</Heading>
      IMG.LY 2019 - now React, Typescript, Gatsby, Markdown - creating the
      documentation site based on markdown - maintaining the PE.SDK Web and all
      its public examples and resources RISE Technologies 2017 - 2019 React,
      Meteor, Material Design - implementation of user elements on the basis of
      design templates - planning and conception of new functions for the
      company's own application - improving the internal ui development
      experience
    </div>
  );
};
