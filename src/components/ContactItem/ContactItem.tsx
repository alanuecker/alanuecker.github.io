import React from 'react';

import { Button } from '../Button';

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
    <Button
      className={classes.root}
      href={href}
      external={external}
      icon={icon}
      title={title}
    />
  );
}
