import React from 'react';

import classes from './style.module.scss';

interface Props {
  href: string;
  title: string;
  external?: boolean;
  icon: React.ReactElement;
  children: string;
}

export function ContactItem({
  href,
  title,
  external = true,
  icon,
  children,
}: Props): React.JSX.Element {
  return (
    <a
      className={classes.root}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <div className={classes.heading}>
        {icon} <span className={classes.title}>{title}</span>
      </div>
      <span className={classes.body}>{children}</span>
    </a>
  );
}
