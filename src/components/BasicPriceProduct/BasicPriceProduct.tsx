import './BasicPriceProduct.scss';
import React from 'react';
import moneyIcon from './assets/moneyIcon.svg';

interface BasicPriceProductProps {
  cost: number;
}

export const BasicPriceProduct = (props: BasicPriceProductProps) => {
  return (
    <div className="basic-price-product">
      <span>{props.cost}</span>
      <img src={moneyIcon} alt="moneyIcon" />
    </div>
  );
};
