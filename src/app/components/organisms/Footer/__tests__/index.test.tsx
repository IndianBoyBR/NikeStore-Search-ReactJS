import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { Footer } from '..';

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
  props: Parameters<typeof Footer>[number],
  store: Store,
) =>
  render(
    <Provider store={store}>
      <Router>
        <Footer {...props} />
      </Router>
    </Provider>,
  );

describe('<Footer  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = ComponentWithParentAndProviders(
      {},
      store,
    );

    const footerElement = getByTestId('footer');

    expect(footerElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
