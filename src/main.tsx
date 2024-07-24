import React from 'react';

import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import { App } from './components/App';
import { Home } from './pages/Home';
import { Imprint } from './pages/Imprint';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ErrorPage } from './pages/ErrorPage';
import './main.scss';
import { TastyEffectCaseStudy } from './pages/TastyEffectCaseStudy';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
