import React from 'react';

import { Footer } from '../Footer';
import { Introduction } from '../Introduction';
import { Name } from '../Name';
import { Window } from '../Window';

import classes from './style.module.scss';

export const App: React.FC = () => {
  return (
    <div className={classes.root}>
      <Window>
        <Name />
        <Introduction />
        <Footer />
      </Window>
    </div>
  );
};
