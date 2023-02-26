import React from 'react';

import { TopBar } from '../TopBar';

import classes from './style.module.scss';

interface Props {
  children?: React.ReactNode;
}

export const Window: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes['frame-accent']} />
      <div className={classes['frame-light']} />
      <div className={classes['frame-dark']} />
      <div className={classes['outer-frame-accent']} />
      <div className={classes['outer-frame-light']} />
      <div className={classes['outer-frame-dark']} />
      <div className={classes.content}>{children}</div>
    </div>
  );
};
