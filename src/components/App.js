import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Bio from '../pages/Bio';
import Work from '../pages/Work';
import Projects from '../pages/Projects';

import Header from './Header';

const App = ({}) => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route path="/" exact component={Projects} />
        <Route path="/work/" exact component={Work} />
        <Route path="/projects/" exact component={Projects} />
        <Route path="/bio/" exact component={Bio} />
      </div>
    </BrowserRouter>
  );
};

export default App;
