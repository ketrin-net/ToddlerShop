import { selectProductsInCart } from '../../../../store/reducers/cartSlice';
import { useSelector } from 'react-redux';
import OrderProductCard from '../CardProductInOrder/CardProductInOrder';
import React, { useState } from 'react';

const TableProductsInCart = () => {
  const allProductsInCart = useSelector(selectProductsInCart);

  return (
    <div className="products-in-Cart">
      {allProductsInCart.map((item, key) => (
        <OrderProductCard product={item} />
      ))}
    </div>
  );
};

export default TableProductsInCart;
