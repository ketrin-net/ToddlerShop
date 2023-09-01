import './ProductCard.scss';
import { BasicPriceProduct } from '../BasicPriceProduct/BasicPriceProduct';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import ButtonsAddProductToCard from '../Buttons/ButtonsAddProductToCard/ButtonsAddProductToCard';
import React from 'react';
import SwitchHeart from '../SwitchHeart';
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
  const matchesMobile = useMediaQuery('(min-width: 1025px)');

  return (
    <div className="product-card">
      <SwitchHeart />
      {iconNew && <div className="icon-new">NEW</div>}
      <img src={imgSrc} alt={imgAlt} className="poster" />
      <p className="title">{title}</p>
      <div className="price">
        <BasicPriceProduct cost={cost} />
        {oldCost && (
          <div className="old-price">
            <span>{oldCost}</span>
            <img src={moneyIconGray} alt="moneyIconGray" />
          </div>
        )}
      </div>
      <ButtonsAddProductToCard />
      <Link to="/orders" className="buy-click">
        Купить в {matchesMobile ? '' : <br />} один клик
      </Link>
    </div>
  );
};
