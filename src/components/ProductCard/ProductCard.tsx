import './ProductCard.scss';
import { BasicPriceProduct } from '../BasicPriceProduct/BasicPriceProduct';
import { Link } from 'react-router-dom';
import { Product } from '../../models/product';
import { selectProductsInBucket } from '../../store/reducers/bucketSlice';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import { useSelector } from 'react-redux';
import ButtonsAddOneUnit from '../Buttons/ButtonsAddOneUnit/ButtonsAddOneUnit';
import ButtonsAddProductToCard from '../Buttons/ButtonsAddProductToCard/ButtonsAddProductToCard';
import React from 'react';
import SwitchHeart from '../SwitchHeart';
import moneyIconGray from './assets/moneyIconGray.svg';

export const ProductCard = (prod: Product) => {
  const matchesMobile = useMediaQuery('(min-width: 1025px)');
  const allProductsInBucket = useSelector(selectProductsInBucket);
  const almostInBucket = allProductsInBucket.find((item) => item.id === prod.id);

  return (
    <div className="product-card">
      <SwitchHeart />
      {prod.iconNew && <div className="icon-new">NEW</div>}
      <img src={prod.imgSrc} alt={prod.imgAlt} className="poster" />
      <p className="title">{prod.title}</p>
      <div className="price">
        <BasicPriceProduct cost={prod.cost} />
        {prod.oldCost && (
          <div className="old-price">
            <span>{prod.oldCost}</span>
            <img src={moneyIconGray} alt="moneyIconGray" />
          </div>
        )}
      </div>
      {almostInBucket === undefined ? <ButtonsAddProductToCard product={prod} /> : <ButtonsAddOneUnit id={prod.id} />}
      <Link to="/orders" className="buy-click">
        Купить в {matchesMobile ? '' : <br />} один клик
      </Link>
    </div>
  );
};
