import React from 'react';

import DelimiterIcon from '../../img/delimiter.svg?react';

import classes from './style.module.scss';

interface Props {
  items: string[];
}

export function SoftwareItems({ items }: Props): React.JSX.Element {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {items.map((item, i) => (
          <React.Fragment key={item}>
            <span className={classes.text}>{item}</span>
            {i < items.length - 1 && <DelimiterIcon className={classes.icon} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
