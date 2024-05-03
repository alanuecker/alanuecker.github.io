import React from 'react';

import classes from './style.module.scss';

interface Props {
  href: string;
  title: string;
  external?: boolean;
  icon: React.ReactElement;
}

export function ContactItem({
  href,
  title,
  external = true,
  icon,
}: Props): React.JSX.Element {
  return (
    <a
      className={classes.root}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {icon} <span className={classes.title}>{title}</span>
    </a>
  );
}
