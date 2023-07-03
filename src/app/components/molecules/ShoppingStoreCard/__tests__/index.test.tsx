import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { ShoppingStoresMockData } from 'mocks/nike-stores/shopping-stores-data';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { ShoppingStoreCard } from '..';

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
  props: Parameters<typeof ShoppingStoreCard>[number],
  store: Store,
) =>
  render(
    <Provider store={store}>
      <IntlProvider locale={navigator.language}>
        <ShoppingStoreCard {...props} />
      </IntlProvider>
    </Provider>,
  );

describe('<ShoppingStoreCard  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = ComponentWithParentAndProviders(
      {
        shoppingStore: ShoppingStoresMockData[0],
      },
      store,
    );

    const shoppingStoreCardElement = getByTestId('shoppingStoreCard');

    expect(shoppingStoreCardElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
