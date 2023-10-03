import './WholesalersPage.scss';
import FormForWholesale from './FormForWholesale/FormForWholesale';
import React from 'react';

const WholesalersPage = () => {
  return (
    <div className="main wholesalers-page">
      <span className="header">Оптовым клиентам</span>
      <p className="description">Заполните форму и мы отправим Вам выгодные условия партнерства</p>
      <FormForWholesale />
    </div>
  );
};

export default WholesalersPage;
