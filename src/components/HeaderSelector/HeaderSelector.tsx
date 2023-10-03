import './HeaderSelector.scss';
import { CommonHeader } from './components/CommonHeader/CommonHeader';
import { Delimiter } from './components/Delimiter/Delimiter';
import { MobileHeader } from './components/MobileHeader/MobileHeader';
import { NavigationBar } from './components/CommonHeader/components/NavigationBar/NavigationBar';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import React from 'react';

export const HeaderSelector = () => {
  const matches = useMediaQuery('(max-width: 900px)');

  return (
    <>
      {matches ? (
        <MobileHeader />
      ) : (
        <>
          <CommonHeader />
          <Delimiter />
          <NavigationBar />
        </>
      )}
    </>
  );
};
