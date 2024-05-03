import React from 'react';

import classes from './style.module.scss';
import classNames from 'classnames';

interface Props {
  id: string;
  title: string;
  showTitle?: boolean;
  showBorder?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  title,
  showTitle = true,
  showBorder = true,
  className,
  children,
}: Props): React.JSX.Element {
  return (
    <section
      className={classNames(classes.root, className, {
        [classes.root__border]: showBorder,
      })}
      id={id}
      title={title}
    >
      {showTitle && (
        <div
          className={classNames(classes.container, {
            [classes.container__full_border]: !showBorder,
          })}
        >
          <h2 className={classes.headline}>{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}
