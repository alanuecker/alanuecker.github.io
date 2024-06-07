import React from 'react';

import classNames from 'classnames';
import { Link } from 'react-router-dom';

import classes from './style.module.scss';

interface Props {
  to: string;
  title: string;
  external?: boolean;
  icon?: React.ReactElement;
  className?: string;
}

export function Button({
  to,
  title,
  external = true,
  icon,
  className,
}: Props): React.JSX.Element {
  return (
    <Link
      className={classNames(classes.root, className)}
      to={to}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {icon} <span className={classes.title}>{title}</span>
    </Link>
  );
}
