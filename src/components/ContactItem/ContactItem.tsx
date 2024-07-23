import React from 'react';

import { Button } from '../Button';

import classes from './style.module.scss';

interface Props {
  to: string;
  title: string;
  external?: boolean;
  icon: React.ReactElement;
}

export function ContactItem({
  to,
  title,
  external = true,
  icon,
}: Props): React.JSX.Element {
  return (
    <Button
      className={classes.root}
      to={to}
      external={external}
      icon={icon}
      title={title}
    />
  );
}
