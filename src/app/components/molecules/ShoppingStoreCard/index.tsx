import ThemeProviderWrapper from 'app/styles/themes/themeProvider';

import PinLocation from 'app/components/atoms/svgs/icons/PinLocation';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormattedNumber } from 'react-intl';
import { ShoppingStore } from 'types';
import { messages } from './messages';
import {
  Availability,
  Container,
  ContentWrapper,
  Distance,
  Header,
  Information,
  SeeOnMap,
  Title,
} from './styles';

interface Props {
  onClick?: () => void;
  shoppingStore: ShoppingStore;
}

export const ShoppingStoreCard = memo(
  ({
    shoppingStore = {
      distance: 0,
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
    onClick,
  }: Props) => {
    const { t } = useTranslation();

    const distanceInKilometersApproximately = (
      (shoppingStore.distance as number) / 1000
    ).toFixed(1);

    return (
      <ThemeProviderWrapper>
        <Container data-testid="shoppingStoreCard">
          <Header>
            <Title>{shoppingStore.placeName}</Title>
            <Distance>
              <FormattedNumber
                style={`unit`}
                unitDisplay="narrow"
                unit="kilometer"
                value={Number(distanceInKilometersApproximately)}
              />
            </Distance>
          </Header>
          <SeeOnMap
            role="showShoppingStoreOnMap"
            type="button"
            onClick={onClick}
          >
            <PinLocation />
            {t(messages.i18nSeeOnMapLabel())}
          </SeeOnMap>
          <ContentWrapper>
            <Information>{shoppingStore.address.location}</Information>
            <Information>
              {t(messages.i18nService())}:
              <br />
              {shoppingStore.workingHours}
            </Information>
            <Availability>
              {t(messages.i18nAvailability(), {
                count: shoppingStore.availability,
              })}
            </Availability>
          </ContentWrapper>
        </Container>
      </ThemeProviderWrapper>
    );
  },
);
