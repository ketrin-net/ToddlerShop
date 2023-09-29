import './OrderComposition.scss';
import { selectProductsInCart } from '../../../CartPage/slice/cartSlice';
import { useSelector } from 'react-redux';
import React from 'react';

const OrderComposition = () => {
  const allProductsInCart = useSelector(selectProductsInCart);

  return (
    <div className="order-composition">
      <div className="title">Состав заказа</div>
      {allProductsInCart.map((product) => (
        <div key={product.id} className="product-info">
          <img src={product.imgSrc} alt={product.imgAlt} />
          <div className="product-description">
            <span className="product-title">{product.title}</span>
            <span className="count">{product.count} шт.</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderComposition;
