import './HeaderSelector.scss';
import { CommonHeader } from './components/CommonHeader/CommonHeader';
import { MobileHeader } from './components/MobileHeader/MobileHeader';
import { NavigationBar } from './components/CommonHeader/components/NavigationBar/NavigationBar';
import { OrdersHeader } from './components/OrdersHeader/OrdersHeader';
import { Path } from '../../enums';
import { useLocation } from 'react-router';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import React from 'react';

export const HeaderSelector = () => {
  const matches = useMediaQuery('(max-width: 480px)');
  const location = useLocation();

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
