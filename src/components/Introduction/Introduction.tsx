import React from 'react';

import classNames from 'classnames';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export const Introduction: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      I&lsquo;m a Software Engineer based in Leipzig, Germany.
      <br />
      <br />I formerly worked at{' '}
      <a
        className={classes.link}
        href="https://img.ly"
        target="_blank"
        rel="noreferrer"
      >
        IMG.LY
      </a>{' '}
      developing and maintaining the documentation experience for all SDKs. This
      included Markdown-based features to improve the writing process and the
      front-end build in React.
      <br />
      <br />
      Previously, I was heavily involved in developing and maintaining the
      latest version of PE.SDK Web and all its public repositories and examples.
    </div>
  );
};
