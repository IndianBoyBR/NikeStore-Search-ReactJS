/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyles } from 'app/styles/global-styles';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Footer, NewsLetter } from './components';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage';
import ThemeProviderWrapper from './styles/themes/themeProvider';

export function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Nike Stores"
        defaultTitle="Nike Stores"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Nike Stores" />
      </Helmet>
      <ThemeProviderWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
        <NewsLetter />
        <Footer />
        <GlobalStyles />
      </ThemeProviderWrapper>
    </BrowserRouter>
  );
}
