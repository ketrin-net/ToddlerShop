import './DeliveryPage.scss';
import DeliveryInfoPage from './components/DeliveryInfoPage/DeliveryInfoPage';
import PaymentInfoPage from './components/PaymentInfoPage/PaymentInfoPage';
import React, { useState } from 'react';

const DeliveryPage = () => {
  const [currentPage, setCurrentPage] = useState(true);

  return (
    <div className="main delivery-page">
      <span className="header">Оплата и доставка</span>
      <div className="navigation">
        <button onClick={() => setCurrentPage(true)} className={currentPage ? 'btn white-delivery active' : 'btn white-delivery'}>
          Оплата
        </button>
        <button onClick={() => setCurrentPage(false)} className={currentPage ? 'btn white-delivery' : 'btn white-delivery active'}>
          Доставка
        </button>
      </div>
      {currentPage ? <PaymentInfoPage /> : <DeliveryInfoPage />}
    </div>
  );
};

export default DeliveryPage;
