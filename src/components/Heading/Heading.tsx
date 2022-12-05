import React from 'react';

import classes from './style.module.scss';

interface Props {
  children: string;
}

export const Heading: React.FC<Props> = ({ children }) => {
  return <h2>{children}</h2>;
};
