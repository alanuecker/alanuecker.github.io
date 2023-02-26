import React from 'react';

import { TopBarButton } from '../TopBarButton';

import classes from './style.module.scss';

export const TopBar: React.FC = () => {
  return (
    <div className={classes.root}>
      <TopBarButton>
        <svg
          width="12"
          height="5"
          style={{ marginTop: '7px' }}
          viewBox="0 0 14 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.971771 2.64636H13.1592"
            stroke="#353535"
            strokeWidth="3.35831"
          />
        </svg>
      </TopBarButton>
      <TopBarButton>
        <svg
          width="14"
          height="auto"
          style={{ marginTop: '-6px', marginLeft: '-1px' }}
          viewBox="0 0 19 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.224884 8.70721H17.6392"
            stroke="#353535"
            strokeWidth="2.46276"
          />
          <rect
            x="1.12043"
            y="7.61219"
            width="16.1199"
            height="13.881"
            stroke="#353535"
            strokeWidth="1.7911"
          />
        </svg>
      </TopBarButton>
      <TopBarButton>
        <svg
          width="12"
          height="12"
          style={{ marginLeft: '-1px' }}
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.80786 0.955353L14.1217 13.2691"
            stroke="#353535"
            strokeWidth="2.46276"
          />
          <path
            d="M1.80786 13.2691L14.1217 0.955343"
            stroke="#353535"
            strokeWidth="2.46276"
          />
        </svg>
      </TopBarButton>
    </div>
  );
};
