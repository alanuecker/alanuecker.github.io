import React from 'react';

import classes from './style.module.scss';

interface Props {
  children?: React.ReactNode;
}

export const TopBarButton: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.root}>
      <div className={classes['outer-frame-accent']} />
      <div className={classes['outer-frame-light']} />
      <div className={classes['outer-frame-dark']} />
      {children}
    </div>
  );
};
