import './PromoAction.scss';
import { BtnBlue } from '../../../../components/Buttons/Buttons';
import PromoActionChild from './assets/PromoActionChild.png';
import PromoActionChildMobile from './assets/PromoActionChildMobile.png';
import React from 'react';

export const PromoAction = () => {
  return (
    <>
      <div className="promo-action-homepage desktop-only">
        <img src={PromoActionChild} alt="PromoActionChild" className="poster desktop-only" />
        <div className="section">
          <h1>Все детские костюмы с акцией 10%</h1>
          <BtnBlue textBtn="Смотреть костюмы" />
        </div>
      </div>
      <div className="promo-action-homepage mobile-only">
        <div className="back-color"></div>
        <img src={PromoActionChildMobile} alt="PromoActionChild" className="poster mobile-only" />
        <div className="section">
          <h1>Все детские костюмы с акцией 10%</h1>
          <BtnBlue textBtn="Смотреть костюмы" />
        </div>
      </div>
    </>
  );
};
