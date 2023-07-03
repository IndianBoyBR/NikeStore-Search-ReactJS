import { Store } from '@reduxjs/toolkit';
import { fireEvent, render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Button } from '..';

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
  props: Parameters<typeof Button>[number],
  store: Store,
) =>
  render(
    <Provider store={store}>
      <Button {...props} />
    </Provider>,
  );

describe('<Button  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = ComponentWithParentAndProviders(
      {
        label: 'Label',
      },
      store,
    );

    const buttonElement = getByTestId('button');

    expect(buttonElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match label inside the button', () => {
    const { getByTestId } = ComponentWithParentAndProviders(
      {
        label: 'Label',
      },
      store,
    );

    const buttonElement = getByTestId('button');
    expect(buttonElement).toHaveTextContent('Label');
  });

  it('should trigger passed onClick function', async () => {
    const onClick = jest.fn();

    const button = ComponentWithParentAndProviders(
      {
        label: 'Label',
        onClick,
      },
      store,
    );

    fireEvent.click(button.getByText('Label'));
    expect(onClick).toHaveBeenCalled();
  });
});
