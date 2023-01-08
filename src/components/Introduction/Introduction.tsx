import React from 'react';

import classNames from 'classnames';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export const Introduction: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      I&lsquo;m a Software Engineer at{' '}
      <a
        className={classes.link}
        href="https://img.ly"
        target="_blank"
        rel="noreferrer"
      >
        IMG.LY
      </a>{' '}
      based in Leipzig, Germany.
      <br />
      <br />
      I currently develop and maintain the documentation experience for all
      SDKs. This includes Markdown-based features to improve the writing process
      and the front-end build in React.
      <br />
      <br />
      Previously, I was heavily involved in developing and maintaining the
      latest version of PE.SDK Web and all its public repositories and examples.
    </div>
  );
};
