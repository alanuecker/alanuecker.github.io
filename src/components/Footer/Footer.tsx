import React from 'react';

import classNames from 'classnames';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export function Footer({ className }: Props): React.JSX.Element {
  return <footer className={classNames(classes.root, className)}></footer>;
}
