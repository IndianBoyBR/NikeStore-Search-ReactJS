import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { LinksDropdown } from '..';

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

const mockData = {
  title: 'Help',
  links: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'y',
      url: '/y',
    },
  ],
};

const ComponentWithParentAndProviders = (
  props: Parameters<typeof LinksDropdown>[number],
  store: Store,
) => {
  return render(
    <Provider store={store}>
      <Router>
        <LinksDropdown {...props} />
      </Router>
    </Provider>,
  );
};

describe('<LinksDropdown  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = ComponentWithParentAndProviders(
      {
        ...mockData,
      },
      store,
    );

    const linksDropdownElement = getByTestId('linksDropdown');

    expect(linksDropdownElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
