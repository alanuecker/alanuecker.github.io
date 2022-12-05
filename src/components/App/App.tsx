import React from 'react';

import classNames from 'classnames';

import { Introduction } from '../Introduction';
import { Name } from '../Name';
import { Socials } from '../Socials';
import { Work } from '../Work';

import classes from './style.module.scss';

export const App: React.FC = () => {
  return (
    <>
      <div className={classes.outline} />
      <div className={classNames(classes.side, classes.side__right)} />
      <div className={classNames(classes.side, classes.side__left)} />
      <div className={classNames(classes.side, classes.side__bottom)} />
      <div className={classNames(classes.side)} />
      <div className={classes.root}>
        <Name className={classNames(classes.item, classes.item__center)} />
        <Introduction
          className={classNames(classes.item, classes.item__top_left)}
        />
        <Socials
          className={classNames(classes.item, classes.item__bottom_left)}
        />
        <div className={classNames(classes.item, classes.item__bottom_right)} />
        <Work className={classNames(classes.item, classes.item__top_right)} />
      </div>
    </>
  );
};
