import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';

import { NewsSlider } from '..';

const ComponentWithParentAndProviders = (
  props: Parameters<typeof NewsSlider>[number],
  store: Store,
) =>
  render(
    <Provider store={store}>
      <Router>
        <NewsSlider {...props} />
      </Router>
    </Provider>,
  );

describe('<NewsSlider  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = ComponentWithParentAndProviders(
      {},
      store,
    );
    const newsSliderElement = getByTestId('newsSlider');

    expect(newsSliderElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
