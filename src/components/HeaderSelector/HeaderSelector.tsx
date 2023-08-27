import './HeaderSelector.scss';
import { CommonHeader } from './components/CommonHeader/CommonHeader';
import { OrdersHeader } from './components/OrdersHeader/OrdersHeader';
import { Path } from '../../enums';
import { useLocation } from 'react-router';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import React from 'react';

export const HeaderSelector = () => {
  const matches = useMediaQuery('(min-width: 420px)');
  const location = useLocation();

  return <>{location.pathname === '/' + Path.OrdersPage ? <OrdersHeader /> : <CommonHeader />}</>;
};
