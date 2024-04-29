import React from 'react';

import classes from './style.module.scss';
import classNames from 'classnames';

interface Props {
  id: string;
  title: string;
  showTitle?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  title,
  showTitle = true,
  className,
  children,
}: Props): React.JSX.Element {
  return (
    <section
      className={classNames(classes.root, className)}
      id={id}
      title={title}
    >
      {showTitle && (
        <div className={classes.container}>
          <h2 className={classes.headline}>{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}
