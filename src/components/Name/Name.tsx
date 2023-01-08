import React from 'react';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export const Name: React.FC<Props> = ({ className }) => {
  return (
    <>
      <h1 className={classes.h1}>Alan Uecker</h1>
      <h2 className={classes.h2}>Software Engineer</h2>
    </>
  );
};
