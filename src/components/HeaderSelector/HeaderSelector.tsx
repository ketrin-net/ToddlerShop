import './HeaderSelector.scss';
import { CommonHeader } from './components/CommonHeader/CommonHeader';
import { MobileHeader } from './components/MobileHeader/MobileHeader';
import { NavigationBar } from './components/CommonHeader/components/NavigationBar/NavigationBar';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import React from 'react';

export const HeaderSelector = () => {
  const matches = useMediaQuery('(max-width: 850px)');

  return (
    <>
      {matches ? (
        <MobileHeader />
      ) : (
        <>
          <CommonHeader />
          <NavigationBar />
        </>
      )}
    </>
  );
};
