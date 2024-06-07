import React from 'react';

import { Link } from 'react-router-dom';

import classes from './style.module.scss';

interface Props {
  to: string;
  onClick?: () => void;
  children: string;
}

export function NavigationItem({
  to,
  onClick,
  children,
}: Props): React.JSX.Element {
  return (
    <li className={classes.root}>
      <Link className={classes.link} to={to} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}
