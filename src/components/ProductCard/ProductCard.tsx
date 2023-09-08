import './ProductCard.scss';
import { BasicPriceProduct } from '../BasicPriceProduct/BasicPriceProduct';
import { Link } from 'react-router-dom';
import { Product } from '../../models/product';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import ButtonsAddProductToCard from '../Buttons/ButtonsAddProductToCard/ButtonsAddProductToCard';
import React from 'react';
import SwitchHeart from '../SwitchHeart';
import moneyIconGray from './assets/moneyIconGray.svg';

export const ProductCard = (item: Product) => {
  const matchesMobile = useMediaQuery('(min-width: 1025px)');

  return (
    <div className="product-card">
      <SwitchHeart />
      {item.iconNew && <div className="icon-new">NEW</div>}
      <img src={item.imgSrc} alt={item.imgAlt} className="poster" />
      <p className="title">{item.title}</p>
      <div className="price">
        <BasicPriceProduct cost={item.cost} />
        {item.oldCost && (
          <div className="old-price">
            <span>{item.oldCost}</span>
            <img src={moneyIconGray} alt="moneyIconGray" />
          </div>
        )}
      </div>
      <ButtonsAddProductToCard item={item} />
      <Link to="/orders" className="buy-click">
        Купить в {matchesMobile ? '' : <br />} один клик
      </Link>
    </div>
  );
};
