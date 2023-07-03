import React from 'react';
import { ShoppingStore } from 'types';
import { LocationOrigin } from 'types/location-origin';

const GoogleMapsModalContext = React.createContext({
  modalData: {
    showModal: false,
    shoppingStoreSelected: {} as ShoppingStore,
    locationOrigin: {} as LocationOrigin,
  },
  setModalDataIntoContext: (
    _showModal: boolean,
    _shoppingStoreSelected: ShoppingStore,
    _origin: LocationOrigin,
  ) => {},
});

GoogleMapsModalContext.displayName = 'GoogleMapsModalContext';

export { GoogleMapsModalContext };
