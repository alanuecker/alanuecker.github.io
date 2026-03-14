import React from 'react';

import classes from './style.module.scss';
import classNames from 'classnames';

interface Props extends React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> {}

export function Image({ className, ...props }: Props): React.JSX.Element {
  return <img {...props} className={classNames(classes.root, className)} />;
}
