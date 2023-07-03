import { GoogleMapsModalContext } from 'app/components/organisms/GoogleMapsDirectionsModal/GoogleMapsModalContext';
import { useGeoLocation } from 'app/hooks/useGeoLocation';

import { useCheckIsMediumScreen } from 'app/hooks/useCheckIsMediumScreen';

import useAxios from 'axios-hooks';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { environment } from 'environment';

import {
  Button,
  DropdownOption,
  GoogleMapsDirectionsModal,
  Header,
  NewsSlider,
  ShoppingStoresList,
  TopHeader,
} from 'app/components';

import { GoogleMapsDirections } from 'app/components/organisms/GoogleMapsDirections';
import useThrottledFunction from 'app/hooks/useThrottle/useThrottle';
import { ShoppingStore } from 'types';
import { GoogleMapsGeocode } from 'types/apis/google-maps-geocode';
import { LocationOrigin } from 'types/location-origin';
import { ShoppingStoreSortOptions } from 'utils/helpers/enums';
import { messages } from './messages';
import {
  Container,
  ContentWrapperMediumScreen,
  ContentWrapperMobileScreen,
  InputStyled,
  Main,
  SearchWrapper,
  Title,
} from './styles';

export function HomePage() {
  const { t } = useTranslation();

  const isMediumScreen = useCheckIsMediumScreen();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const geoLocation = useGeoLocation();
  const [locationOrigin, setLocationOrigin] = useState<LocationOrigin>({
    placeName: '',
    lat: 0,
    lng: 0,
  });
  const [modalData, setModalData] = useState<{
    showModal: boolean;
    shoppingStoreSelected: ShoppingStore;
    locationOrigin: LocationOrigin;
  }>({
    showModal: false,
    shoppingStoreSelected: {
      id: 0,
      placeName: '',
      address: {
        lat: 0,
        lng: 0,
        location: '',
      },
      availability: 0,
      workingHours: '',
    },
    locationOrigin: {
      placeName: t(messages.i18nYourLocation()),
      lat: 0,
      lng: 0,
    },
  });

  const filterOptions = [
    {
      key: ShoppingStoreSortOptions.Asc,
      title: t(messages.i18nMinorDistance()),
    },
    {
      key: ShoppingStoreSortOptions.Desc,
      title: t(messages.i18nGreaterDistance()),
    },
  ];

  const [filterOptionSelected, setFilterOptionSelected] =
    useState<DropdownOption>(filterOptions[0]);

  const [shoppingStoreSelected, setShoppingStoreSelected] =
    useState<ShoppingStore | null>(null);

  const setModalDataIntoContext = (
    showModal: boolean,
    shoppingStoreSelected: ShoppingStore,
    locationOrigin: LocationOrigin,
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

  const [{ data: shoppingStoresData = [] }, refetchShoppingStores] = useAxios<
    ShoppingStore[]
  >(
    {
      url: 'nike-stores',
    },
    {
      manual: true,
    },
  );

  const shoppingStoresDataSorted = useMemo(() => {
    return shoppingStoresData.sort((prev, next) =>
      sortBySelectedOption(prev, next, filterOptionSelected),
    );
  }, [filterOptionSelected, shoppingStoresData]);

  const [, refetchSearchAddress] = useAxios<GoogleMapsGeocode>(
    {
      url: 'maps/api/geocode/json',
      baseURL: 'https://maps.googleapis.com',
    },
    {
      manual: true,
    },
  );

  const handleSearchAddress = useCallback(() => {
    setShoppingStoreSelected(() => null);
    refetchSearchAddress({
      params: {
        address: searchInputRef.current?.value,
        key: environment.googleGeocodeAPIKey ?? '',
      },
    })
      .then(({ data }) => {
        if (!data.results.length) {
          return;
        }

        const {
          geometry: {
            location: { lat, lng },
          },
        } = data.results[0];

        setLocationOrigin({
          placeName: searchInputRef.current?.value ?? '',
          lat,
          lng,
        });

        refetchShoppingStores({
          params: { lat, lng },
        }).catch(e => {
          console.error(e);
        });
      })
      .catch(e => {
        console.error(e);
      });
  }, [refetchSearchAddress, refetchShoppingStores]);

  const { throttledFn: handleSearchAddressThrottled } = useThrottledFunction({
    callbackFn: handleSearchAddress,
    throttleMs: 1500,
  });

  useEffect(() => {
    if (!geoLocation.latitude || !geoLocation.longitude) {
      return;
    }

    setLocationOrigin(currentValue => ({
      ...currentValue,
      lat: geoLocation.latitude as number,
      lng: geoLocation.longitude as number,
    }));

    refetchShoppingStores({
      params: {
        lat: geoLocation.latitude,
        lng: geoLocation.longitude,
      },
    }).catch(e => {
      console.error(e);
    });
  }, [geoLocation, refetchShoppingStores]);

  useEffect(() => {
    if (shoppingStoreSelected) {
      if (!isMediumScreen) {
        setModalDataIntoContext(true, shoppingStoreSelected, locationOrigin);
      }
    }
  }, [shoppingStoreSelected, isMediumScreen, locationOrigin]);

  return (
    <>
      <Helmet>
        <title>{t(messages.i18nTitle())}</title>
        <meta
          name="description"
          content={t(messages.i18nPageMetaContent()) ?? ''}
        />
      </Helmet>
      <GoogleMapsModalContext.Provider value={modalContextMemo}>
        {isMediumScreen && <TopHeader />}
        <Header />
        <NewsSlider />
        <Container>
          <Main>
            <Title>{t(messages.i18nShoppingStores())}</Title>
            <SearchWrapper>
              <InputStyled
                ref={searchInputRef}
                role="search"
                onChange={() => {
                  if (!isMediumScreen) {
                    handleSearchAddressThrottled();
                  }
                }}
                tabIndex={0}
                isRounded
                showSearchIcon
                type="text"
                placeholder={t(messages.i18nSearchPlaceholder())}
              />
              {isMediumScreen && (
                <Button
                  onClick={handleSearchAddress}
                  label={t(messages.i18nSearchButtonLabel())}
                />
              )}
            </SearchWrapper>
            {!isMediumScreen && shoppingStoresDataSorted.length > 0 && (
              <ContentWrapperMobileScreen>
                <ShoppingStoresList
                  role="list"
                  setFilterOptionSelected={setFilterOptionSelected}
                  filterOptions={filterOptions}
                  filterOptionSelected={filterOptionSelected}
                  setShoppingStoreSelected={setShoppingStoreSelected}
                  shoppingStores={shoppingStoresDataSorted}
                />
              </ContentWrapperMobileScreen>
            )}
            {isMediumScreen && shoppingStoresDataSorted.length > 0 && (
              <ContentWrapperMediumScreen>
                <ShoppingStoresList
                  role="list"
                  setFilterOptionSelected={setFilterOptionSelected}
                  filterOptions={filterOptions}
                  filterOptionSelected={filterOptionSelected}
                  setShoppingStoreSelected={setShoppingStoreSelected}
                  shoppingStores={shoppingStoresDataSorted}
                />
                {shoppingStoreSelected && origin && (
                  <GoogleMapsDirections
                    origin={{
                      lat: locationOrigin.lat,
                      lng: locationOrigin.lng,
                    }}
                    destination={{
                      lat: shoppingStoreSelected.address.lat,
                      lng: shoppingStoreSelected.address.lng,
                    }}
                  />
                )}
              </ContentWrapperMediumScreen>
            )}
          </Main>
        </Container>
        <GoogleMapsDirectionsModal />
      </GoogleMapsModalContext.Provider>
    </>
  );
}

const sortBySelectedOption = (
  prev: ShoppingStore,
  next: ShoppingStore,
  filterOptionSelected: DropdownOption,
) => {
  if (!prev.distance || !next.distance) {
    return 1;
  }

  if (filterOptionSelected.key === ShoppingStoreSortOptions.Asc) {
    return prev.distance > next.distance ? 1 : -1;
  }

  if (filterOptionSelected.key === ShoppingStoreSortOptions.Desc) {
    return prev.distance < next.distance ? 1 : -1;
  }

  return 1;
};
