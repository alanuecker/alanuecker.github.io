import React from 'react';

import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';

import classes from './style.module.scss';

interface Props {
  children?: React.ReactNode;
}

export function App({ children }: Props): React.JSX.Element {
  return (
    <div>
      <ScrollRestoration />
      <Header />
      <main className={classes.content}>
        <Outlet />
        {children}
      </main>
      <Footer />
    </div>
  );
}
