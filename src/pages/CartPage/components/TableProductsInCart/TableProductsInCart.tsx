import { selectProductsInCart } from '../../slice/cartSlice';
import { useSelector } from 'react-redux';
import OrderProductCard from '../CardProductInOrder/CardProductInOrder';
import React, { useState } from 'react';

const TableProductsInCart = () => {
  const allProductsInCart = useSelector(selectProductsInCart);

  return (
    <div className="products-in-Cart">
      {allProductsInCart.map((item, index) => (
        <OrderProductCard key={index} product={item} />
      ))}
    </div>
  );
};

export default TableProductsInCart;
