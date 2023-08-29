import './ProductCard.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import SwitchHeart from '../SwitchHeart';
import moneyIcon from './assets/moneyIcon.svg';
import moneyIconGray from './assets/moneyIconGray.svg';

export interface ProductCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  cost: number;
  oldCost?: number;
  iconNew?: boolean;
}

export const ProductCard = ({ imgSrc, imgAlt, title, cost, oldCost, iconNew }: ProductCardProps) => {
  return (
    <div className="product-card">
      <SwitchHeart />
      {iconNew && <div className="icon-new">NEW</div>}
      <img src={imgSrc} alt={imgAlt} className="poster" />
      <p className="title">{title}</p>
      <div className="price">
        <div className="basic-price">
          <span>{cost}</span>
          <img src={moneyIcon} alt="moneyIcon" />
        </div>
        {oldCost && (
          <div className="old-price">
            <span>{oldCost}</span>
            <img src={moneyIconGray} alt="moneyIconGray" />
          </div>
        )}
      </div>
      <button className="btn blue">В корзину</button>
      <Link to="/orders" className="buyClick">
        Купить в <br className="mobile-only" /> один клик
      </Link>
    </div>
  );
};
