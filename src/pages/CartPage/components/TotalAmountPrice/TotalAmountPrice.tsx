import './TotalAmountPrice.scss';
import { Link } from 'react-router-dom';
import { selectCountProductsInCart, totalCostProductsInCart } from '../../../../store/reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import moneyIcon from '../../assets/moneyIconGray.svg';

const TotalAmountPrice = () => {
  const totalCost = useSelector(totalCostProductsInCart);
  const productsCountInCart = useSelector(selectCountProductsInCart);

  return (
    <div id="total-amount-price">
      <div className="promo-code">
        <input type="text" placeholder="Промокод" />
        <button className="btn blue">Применить</button>
      </div>
      <div className="sum-cost">
        <span>Количество ({productsCountInCart})</span>
        <span>
          {totalCost} <img src={moneyIcon} alt="moneyIcon" />
        </span>
      </div>
      <div className="sum-cost sale">
        <span>Скидка</span>
        <span>
          {0} <img src={moneyIcon} alt="moneyIcon" />
        </span>
      </div>
      <div className="sum-cost total">
        <span>Итого</span>
        <span className="sum">
          {totalCost} <img src={moneyIcon} alt="moneyIcon" />
        </span>
      </div>
      <Link to="/orders" className="btn blue">
        Перейти к оформлению
      </Link>
    </div>
  );
};

export default TotalAmountPrice;
