import './ProductCard.scss';
import { BasicPriceProduct } from '../BasicPriceProduct/BasicPriceProduct';
import { Link } from 'react-router-dom';
import { Path } from '../../enums/Path';
import { Product } from '../../models/product';
import { formatNumber } from '../../helpers/formatNumber';
import { selectProductsInCart } from '../../store/reducers/cartSlice';
import { useMediaQuery } from '../../customHooks/useMediaQuery';
import { useSelector } from 'react-redux';
import ButtonAddOneUnit from '../Buttons/ButtonsAddOneUnit/ButtonsAddOneUnit';
import ButtonAddProductToCart from '../Buttons/ButtonsAddProductToCard/ButtonsAddProductToCard';
import React from 'react';
import SwitchHeart from '../SwitchHeart/SwitchHeart';
import moneyIconGray from './assets/moneyIconGray.svg';

export const ProductCard = (prod: Product) => {
  const matchesMobile = useMediaQuery('(min-width: 1025px)');
  const allProductsInCart = useSelector(selectProductsInCart);
  const almostInCart = allProductsInCart.find((item) => item.id === prod.id);

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
            <span>{formatNumber(prod.oldCost)}</span>
            <img src={moneyIconGray} alt="moneyIconGray" />
          </div>
        )}
      </div>
      {!almostInCart ? <ButtonAddProductToCart product={prod} /> : <ButtonAddOneUnit id={prod.id} />}
      <Link to={Path.NewOrderPage} className="buy-click">
        Купить в {matchesMobile ? '' : <br />} один клик
      </Link>
    </div>
  );
};
