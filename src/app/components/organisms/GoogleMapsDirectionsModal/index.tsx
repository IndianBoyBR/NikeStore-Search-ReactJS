import CloseIcon from 'app/components/atoms/svgs/icons/Close';
import { GoogleMapsDirections } from 'app/components/organisms/GoogleMapsDirections';
import { GoogleMapsModalContext } from 'app/components/organisms/GoogleMapsDirectionsModal/GoogleMapsModalContext';
import { memo } from 'react';
import { CloseButton, Container } from './styles';

export const GoogleMapsDirectionsModal = memo(() => {
  return (
    <GoogleMapsModalContext.Consumer>
      {({ modalData, setModalDataIntoContext }) => {
        if (!modalData?.showModal) {
          return null;
        }

        return (
          <>
            <Container>
              <GoogleMapsDirections
                origin={{
                  lat: modalData.locationOrigin.lat,
                  lng: modalData.locationOrigin.lng,
                }}
                destination={{
                  lat: modalData.shoppingStoreSelected.address.lat,
                  lng: modalData.shoppingStoreSelected.address.lng,
                }}
              />
            </Container>
            <CloseButton
              onClick={() =>
                setModalDataIntoContext(
                  false,
                  {
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
                  {
                    lat: 0,
                    lng: 0,
                    placeName: '',
                  },
                )
              }
            >
              <CloseIcon />
            </CloseButton>
          </>
        );
      }}
    </GoogleMapsModalContext.Consumer>
  );
});
