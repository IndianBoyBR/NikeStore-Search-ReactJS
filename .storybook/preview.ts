import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import i18n from './i18next';

const preview: Preview = {
  globals: {
    locale: 'pt',
    locales: {
      pt: { title: 'Português', right: 'BR' },
    },
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    i18n,
  },
};

export default preview;
