import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { ContactSection } from '../ContactSection';

import classes from './style.module.scss';

export function App(): React.JSX.Element {
  return (
    <div>
      <Header />
      <main className={classes.content}>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
