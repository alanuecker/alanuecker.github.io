import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.scss';
import './fonts/Archivo/archivo-black-regular.woff';
import './fonts/Roboto/roboto-regular.woff';

import { App } from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
