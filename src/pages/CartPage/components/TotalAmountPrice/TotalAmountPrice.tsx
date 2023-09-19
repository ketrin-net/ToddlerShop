import './TotalAmountPrice.scss';
import { Link } from 'react-router-dom';
import { selectCountProductsInCart, selectTotalCostProductsInCart } from '../../../../store/reducers/cartSlice';
import { useSelector } from 'react-redux';
import React from 'react';
import moneyIcon from '../../assets/moneyIconGray.svg';
import { formatNumber } from '../../../../helpers/formatNumber';

interface TotalAmountPriceProps {
  costDelivery?: number;
}

const TotalAmountPrice = (props: TotalAmountPriceProps) => {
  const costWithoutDelivery = useSelector(selectTotalCostProductsInCart);
  const calculationTotlaCost = () => {
    if (props.costDelivery !== undefined) {
      return costWithoutDelivery + props.costDelivery;
    } else {
      return costWithoutDelivery;
    }
  };
  const totalCost = calculationTotlaCost();
  const productsCountInCart = useSelector(selectCountProductsInCart);

  return (
    <div id="total-amount-price">
      <div className="promo-code">
        <input type="text" placeholder="Промокод" />
        <button className="btn blue">Применить</button>
      </div>
      <div className="price-information">
        <div className="sum-cost">
          <span>Количество ({productsCountInCart})</span>
          <span>
            {formatNumber(costWithoutDelivery)} <img src={moneyIcon} alt="moneyIcon" />
          </span>
        </div>
        {props.costDelivery && (
          <div className="sum-cost delivery">
            <span>Доставка</span>
            <span>
              {formatNumber(props.costDelivery)} <img src={moneyIcon} alt="moneyIcon" />
            </span>
          </div>
        )}
      </div>
      <div className="line"></div>
      <div className="counting">
        <div className="sum-cost sale">
          <span>Скидка</span>
          <span>
            {0} <img src={moneyIcon} alt="moneyIcon" />
          </span>
        </div>
        <div className="sum-cost total">
          <span>Итого</span>
          <span className="sum">
            {formatNumber(totalCost)} <img src={moneyIcon} alt="moneyIcon" />
          </span>
        </div>
      </div>
      <Link to="/neworder" className="btn blue go-order">
        Перейти к оформлению
      </Link>
    </div>
  );
};

export default TotalAmountPrice;
