import React from 'react';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export const Introduction: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      I&lsquo;m currently working at <a href="img.ly">IMG.LY</a> building the
      documentation experience for all SDKs.
      <br />
      <br />
      Providing developers an easy way to write documentation and read
      documenation.
      <br />
      <br />
      Previously, I was heavily involved in developing and maintaining the
      latest version of PE.SDK Web and all its public repositories and examples.
    </div>
  );
};
