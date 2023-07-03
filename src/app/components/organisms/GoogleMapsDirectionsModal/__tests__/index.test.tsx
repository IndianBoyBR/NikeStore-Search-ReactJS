import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { GoogleMapsModalContext } from 'app/components/organisms/GoogleMapsDirectionsModal/GoogleMapsModalContext';

import ThemeProviderWrapper from 'app/styles/themes/themeProvider';

import { GoogleMapsDirectionsModal } from 'app/components/molecules';
import { ShoppingStoresMockData } from 'mocks/nike-stores/shopping-stores-data';
import { useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { ShoppingStore } from 'types';

import { initialize as initializeGoogleMapsJestMocks } from '@googlemaps/jest-mocks';
import { LocationOrigin } from 'types/location-origin';

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

beforeEach(() => {
  initializeGoogleMapsJestMocks();

  global.window.google.maps = {
    ...global.window.google.maps,
    TravelMode: {
      DRIVING: 'DRIVING',
    },
  } as any;
});

const ComponentComponentWithParentAndProviders = (store: Store) => {
  const [modalData, setModalData] = useState<{
    showModal: boolean;
    shoppingStoreSelected: ShoppingStore;
    locationOrigin: LocationOrigin;
  }>({
    showModal: true,
    shoppingStoreSelected: ShoppingStoresMockData[0],
    locationOrigin: {
      placeName: '',
      lat: 0,
      lng: 0,
    },
  });

  const setModalDataIntoContext = (
    showModal: boolean,
    shoppingStoreSelected: ShoppingStore,
    locationOrigin: any,
  ) => {
    setModalData({
      showModal,
      shoppingStoreSelected,
      locationOrigin,
    });
  };

  const modalContextMemo = useMemo(
    () => ({ modalData, setModalDataIntoContext }),
    [modalData],
  );

  return (
    <Provider store={store}>
      <Router>
        <ThemeProviderWrapper>
          <GoogleMapsModalContext.Provider value={modalContextMemo}>
            <GoogleMapsDirectionsModal />
          </GoogleMapsModalContext.Provider>
        </ThemeProviderWrapper>
      </Router>
    </Provider>
  );
};

describe('<GoogleMapsDirectionsModal  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const ParentComponent = () =>
      ComponentComponentWithParentAndProviders(store);
    const { container } = render(<ParentComponent />);

    const googleMaps = container.querySelector<HTMLDivElement>('#google-map');

    expect(googleMaps).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
