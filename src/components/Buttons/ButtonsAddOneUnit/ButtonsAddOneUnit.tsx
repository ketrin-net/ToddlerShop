import './ButtonsAddOneUnit.scss';
import { changeCountProductInCart, selectProductsInCart } from '../../../pages/CartPage/slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import minus from './assets/minus.svg';
import plus from './assets/plus.svg';

const ButtonAddOneUnit = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const productsQuantity = useSelector(selectProductsInCart).find((i) => i.id === id)?.count;

  return (
    <div className="btns-add-delete-unit">
      <button onClick={() => dispatch(changeCountProductInCart({ id: id, addOrDelete: false }))}>
        <img src={minus} alt="minus" />
      </button>
      <div className="amount">{productsQuantity}</div>
      <button onClick={() => dispatch(changeCountProductInCart({ id: id, addOrDelete: true }))}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};

export default ButtonAddOneUnit;
