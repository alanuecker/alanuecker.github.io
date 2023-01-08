import React from 'react';

import { Footer } from '../Footer';
import { Introduction } from '../Introduction';
import { Name } from '../Name';

import classes from './style.module.scss';

export const App: React.FC = () => {
  return (
    <div className={classes.root}>
      <section className={classes.hero}>
        <Name />
        <Introduction />
      </section>
      <Footer />
    </div>
  );
};
