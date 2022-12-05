import React from 'react';

import classNames from 'classnames';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export const Name: React.FC<Props> = ({ className }) => {
  return <div className={classNames(className, classes.root)}>Alan Uecker</div>;
};
