import React from 'react';

import classes from './style.module.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export function CaseStudyPage({
  className,
  children,
}: Props): React.JSX.Element {
  return <div className={classNames(classes.root, className)}>{children}</div>;
}
