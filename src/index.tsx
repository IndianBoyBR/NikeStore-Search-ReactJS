/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import { configure } from 'axios-hooks';
import axiosRetry from 'axios-retry';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Use consistent styling
import 'sanitize.css/sanitize.css';

// Import root app
import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';

import reportWebVitals from 'reportWebVitals';

// Initialize languages
import './locales/i18n';

import { IntlProvider } from 'react-intl';

import axios from './app/configs/axios';

configure({ axios });
axiosRetry(axios, { retries: 3 });

// TODO: start msw only for development mode
// if (process.env.NODE_ENV === 'development') {
const { worker } = require('./mocks/browser');
worker.start();
// }

const store = configureAppStore();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <IntlProvider locale={navigator.language}>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </IntlProvider>
  </Provider>,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
