import React from 'react';

import { Footer } from '../Footer';
import { Introduction } from '../Introduction';
import { Name } from '../Name';

import classes from './style.module.scss';

export const App: React.FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.window}>
        <div className={classes.background} />
        <div className={classes['frame-accent']} />
        <div className={classes['frame-light']} />
        <div className={classes['frame-dark']} />
        <div className={classes['outer-frame-accent']} />
        <div className={classes['outer-frame-light']} />
        <div className={classes['outer-frame-dark']} />
      </div>
    </div>
  );
};
