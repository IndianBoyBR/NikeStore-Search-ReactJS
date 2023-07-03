import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { Header } from '..';

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
  props: Parameters<typeof Header>[number],
  store: Store,
) =>
  render(
    <Provider store={store}>
      <Router>
        <Header {...props} />
      </Router>
    </Provider>,
  );

describe('<Header  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = ComponentWithParentAndProviders(
      {},
      store,
    );

    const headerElement = getByTestId('header');

    expect(headerElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
