import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { NewsLetter } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

const ComponentWithParentAndProviders = (
  props: Parameters<typeof NewsLetter>[number],
  store: Store,
) =>
  render(
    <Provider store={store}>
      <NewsLetter {...props} />
    </Provider>,
  );

describe('<NewsLetter  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = ComponentWithParentAndProviders(
      {},
      store,
    );

    const newsLetterElement = getByTestId('newsLetter');

    expect(newsLetterElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
