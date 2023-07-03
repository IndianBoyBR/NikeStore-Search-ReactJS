import { useCallback, useEffect, useRef } from 'react';

type UseGetIsMounted = () => () => boolean;

export const useGetIsMounted: UseGetIsMounted = () => {
  const isMountedRef = useRef<boolean>(false);
  const get = useCallback(() => isMountedRef.current, []);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return get;
};
