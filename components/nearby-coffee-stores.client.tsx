'use client';

import React from 'react';
import Banner from './banner.client';
import useTrackLocation from '@/hooks/use-track-location';

export default function NearbyCoffeeStores() {
  const { handleTrackLocation } = useTrackLocation();

  const handleOnClick = () => {
    handleTrackLocation();
  };

  return (
    <div>
      <Banner handleOnClick={handleOnClick} />
    </div>
  );
}
