/**
 * Asynchronously loads the component for HomePage
 */

import LoadingIcon from 'app/components/atoms/svgs/icons/Loading';
import React from 'react';
import { lazyLoad } from 'utils/loadable';

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomePage,

  {
    fallback: (
      <div
        style={{
          width: '50%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <LoadingIcon />
      </div>
    ),
  },
);
