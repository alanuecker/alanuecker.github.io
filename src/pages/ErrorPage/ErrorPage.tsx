import React from 'react';

import { useRouteError } from 'react-router-dom';

import { App } from '../../components/App';
import { Section } from '../../components/Section';
import DiamondIcon from '../../img/diamond.svg?react';
import { Button } from '../../components/Button';

import classes from './style.module.scss';

export function ErrorPage(): React.JSX.Element {
  const error = useRouteError();
  console.error(error);

  return (
    <App>
      <Section className={classes.root} title="Something went wrong">
        <DiamondIcon className={classes.diamond} />
        <div className={classes.item}>
          <div className={classes.item__container}>
            We couldn't find the page you where looking for.
            <div className={classes.button_container}>
              <Button to="/" title="Go Home" />
            </div>
          </div>
        </div>
      </Section>
    </App>
  );
}
