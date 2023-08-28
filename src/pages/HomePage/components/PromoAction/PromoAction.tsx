import './PromoAction.scss';
import { BtnBlue } from '../../../../components/Buttons/Buttons';
import PromoActionChild from './assets/PromoActionChild.png';
import React from 'react';

export const PromoAction = () => {
  return (
    <div className="promo-action-homepage">
      <img src={PromoActionChild} alt="PromoActionChild" className="poster" />
      <div className="section">
        <h1>Все детские костюмы с акцией 10%</h1>
        <BtnBlue textBtn="Смотреть костюмы" />
      </div>
    </div>
  );
};
