import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { Store } from 'redux';
import { configureAppStore } from 'store/configureStore';
import { Input } from '..';

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
  props: Parameters<typeof Input>[number],
  store: Store,
) =>
  render(
    <Provider store={store}>
      <Input {...props} />
    </Provider>,
  );

describe('<Input />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = ComponentWithParentAndProviders(
      {
        type: 'search',
        placeholder: 'placeholder',
      },
      store,
    );

    const searchElement = getByTestId('input');

    expect(searchElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
