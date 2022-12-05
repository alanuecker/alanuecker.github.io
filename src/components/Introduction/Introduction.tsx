import React from 'react';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export const Introduction: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      Hi. My name is Alan and i am software engineer based in Leipzig, Germany.
    </div>
  );
};
