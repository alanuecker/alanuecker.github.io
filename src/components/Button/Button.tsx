import React from 'react';
import classNames from 'classnames';

import classes from './style.module.scss';

interface Props {
  href: string;
  title: string;
  external?: boolean;
  icon: React.ReactElement;
  className?: string;
}

export function Button({
  href,
  title,
  external = true,
  icon,
  className,
}: Props): React.JSX.Element {
  return (
    <a
      className={classNames(classes.root, className)}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {icon} <span className={classes.title}>{title}</span>
    </a>
  );
}
