import { useEffect, useState } from 'react';
import { useGetIsMounted } from '../useGetIsMounted';

export type UseGeoLocationReturnType = {
  isError: boolean;
  latitude: number | null;
  longitude: number | null;
  message: string;
};

type UseGeoLocationOptions = PositionOptions & {
  when?: boolean;
};

function getGeoLocation(
  options: UseGeoLocationOptions,
): Promise<UseGeoLocationReturnType> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const { coords } = position;
          const { latitude, longitude } = coords;
          resolve({
            isError: false,
            latitude,
            longitude,
            message: '',
          });
        },
        error => {
          reject({ isError: true, message: error.message });
        },
        options,
      );
    } else {
      reject({
        isError: true,
        message: 'Geolocation is not supported for this Browser/OS.',
      });
    }
  });
}

const defaultGeoLocationOptions: UseGeoLocationOptions = {
  enableHighAccuracy: false,
  maximumAge: 0,
  timeout: Number.POSITIVE_INFINITY,
  when: true,
};

export const useGeoLocation = (
  geoLocationOptions: UseGeoLocationOptions = defaultGeoLocationOptions,
): UseGeoLocationReturnType => {
  const [geoObject, setGeoObject] = useState<UseGeoLocationReturnType>({
    latitude: null,
    longitude: null,
    isError: false,
    message: '',
  });
  const { when, enableHighAccuracy, timeout, maximumAge } = geoLocationOptions;
  const getIsMounted = useGetIsMounted();
  useEffect(() => {
    async function getGeoCode() {
      try {
        const value = await getGeoLocation({
          enableHighAccuracy,
          maximumAge,
          timeout,
          when,
        });
        if (getIsMounted()) {
          setGeoObject(value);
        }
      } catch (error: any) {
        if (getIsMounted()) {
          setGeoObject(error);
        }
      }
    }
    if (when) {
      void getGeoCode();
    }
  }, [when, enableHighAccuracy, timeout, maximumAge, getIsMounted]);

  return geoObject;
};
