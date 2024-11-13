import React from 'react';

import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import { App } from './components/App';
import { Home } from './pages/Home';
import { Imprint } from './pages/Imprint';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ErrorPage } from './pages/ErrorPage';
import { TastyEffectCaseStudy } from './pages/TastyEffectCaseStudy';
import { NextOnStageCaseStudy } from './pages/NextOnStageCaseStudy';

import './main.scss';
import 'modern-normalize/modern-normalize.css';

const router = createHashRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/imprint',
        element: <Imprint />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/projects/tasty-effect',
        element: <TastyEffectCaseStudy />,
      },
      {
        path: '/projects/next-on-stage',
        element: <NextOnStageCaseStudy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
