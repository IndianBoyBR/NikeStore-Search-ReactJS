import { DirectionsRenderer, GoogleMap } from '@react-google-maps/api';
import React, { memo, useState } from 'react';

export interface GoogleMapsDirectionsProps {
  origin: {
    lat: number;
    lng: number;
  };
  destination: {
    lat: number;
    lng: number;
  };
}

export const GoogleMapsDirections = memo(
  ({ origin, destination }: GoogleMapsDirectionsProps) => {
    const DirectionsService = new google.maps.DirectionsService();

    return (
      <GoogleMap
        id="google-map"
        mapContainerStyle={{
          borderRadius: '0.625rem',
          height: '100%',
          width: '100%',
        }}
        center={{
          lat: destination.lat,
          lng: destination.lng,
        }}
        zoom={10}
      >
        <DirectionsRendererWrapper
          origin={origin}
          destination={destination}
          directionsService={DirectionsService}
        />
      </GoogleMap>
    );
  },
);

export interface DirectionsRendererWrapperProps {
  origin: {
    lat: number;
    lng: number;
  };
  destination: {
    lat: number;
    lng: number;
  };
  directionsService: google.maps.DirectionsService;
}

const DirectionsRendererWrapper = memo(
  ({
    destination,
    origin,
    directionsService,
  }: DirectionsRendererWrapperProps) => {
    const [directions, setDirections] =
      useState<google.maps.DirectionsResult | null>(null);

    React.useEffect(() => {
      directionsService.route(
        {
          origin,
          destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        },
      );
    }, [origin, destination, directionsService]);

    if (!directions) {
      return null;
    }

    return (
      <DirectionsRenderer
        options={{
          directions: directions,
        }}
      />
    );
  },
);
