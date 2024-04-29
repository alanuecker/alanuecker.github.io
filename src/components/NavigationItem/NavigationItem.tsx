import React from 'react';

import classes from './style.module.scss';

interface Props {
  href: string;
  onClick?: () => void;
  children: string;
}

export function NavigationItem({
  href,
  onClick,
  children,
}: Props): React.JSX.Element {
  return (
    <li className={classes.root}>
      <a className={classes.link} href={href} onClick={onClick}>
        {children}
      </a>
    </li>
  );
}
