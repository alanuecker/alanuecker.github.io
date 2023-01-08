import React from 'react';

import classNames from 'classnames';

import { Footer } from '../Footer';
import { Introduction } from '../Introduction';
import { Name } from '../Name';

import classes from './style.module.scss';

export const App: React.FC = () => {
  return (
    <div className={classes.root}>
      <section className={classes.hero}>
        <Name className={classNames(classes.item, classes.item__center)} />
        <Introduction
          className={classNames(classes.item, classes.item__top_left)}
        />
      </section>
      <Footer className={classNames(classes.item, classes.item__bottom_left)} />
    </div>
  );
};
