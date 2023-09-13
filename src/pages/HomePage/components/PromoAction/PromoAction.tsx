import './PromoAction.scss';
import { Link } from 'react-router-dom';
import PromoActionChild from './assets/PromoActionChild.png';
import PromoActionChildMobile from './assets/PromoActionChildMobile.png';
import React from 'react';

export const PromoAction = () => {
  return (
    <div className="promo-action-homepage">
      <div className="back-color"></div>
      <picture>
        <source srcSet={PromoActionChild} media="(min-width: 851px)" className="poster" />
        <img src={PromoActionChildMobile} alt="PromoActionChild" className="poster" />
      </picture>
      <div className="section">
        <span>Все детские костюмы с акцией 10%</span>
        <Link to="/" className="btn blue">
          Смотреть костюмы
        </Link>
      </div>
    </div>
  );
};
