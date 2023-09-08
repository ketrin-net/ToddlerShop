import './TotalAmountPrice.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import moneyIcon from '../../assets/moneyIconGray.svg';

interface TotalAmountPriceProps {
  costProducts: number[];
}

const TotalAmountPrice = (props: TotalAmountPriceProps) => {
  let sumCost = props.costProducts.reduce((acc, number) => acc + number);

  return (
    <div id="total-amount-price">
      <div className="promo-code">
        <input type="text" placeholder="Промокод" />
        <button className="btn blue">Применить</button>
      </div>
      <div className="sum-cost">
        <span>Количество ({props.costProducts.length})</span>
        <span>
          {sumCost} <img src={moneyIcon} alt="moneyIcon" />
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
          {sumCost} <img src={moneyIcon} alt="moneyIcon" />
        </span>
      </div>
      <Link to="/orders" className="btn blue">
        Перейти к оформлению
      </Link>
    </div>
  );
};

export default TotalAmountPrice;
