import React from 'react';

import classNames from 'classnames';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export const Name: React.FC<Props> = ({ className }) => {
  return (
    <h1 className={classNames(classes.root, className)}>
      Hello I&lsquo;m Alan Uecker a Software Engineer based in Leipzig, Germany.
    </h1>
  );
};
